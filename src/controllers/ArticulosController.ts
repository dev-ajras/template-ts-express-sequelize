import { Request, Response } from 'express';
import Articulo from '../models/Articulo';

const getImagenUrl = (isbn: string): string => {
    return `https://imgserver1.fierro.com.ar/get/thumb/500/500/${isbn}.jpg`;
};

export async function getArticulos(req: Request, res: Response) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const offset = (page - 1) * limit;

        const { count, rows } = await Articulo.findAndCountAll({
            limit,
            offset,
            order: [['Titulo', 'ASC']]
        });

        // Agregar la URL de la imagen a cada artículo
        const articulosConImagen = rows.map(articulo => ({
            ...articulo.toJSON(),
            imagenUrl: getImagenUrl(articulo.Isbn)
        }));

        res.json({
            total: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            articulos: articulosConImagen
        });
    } catch (error) {
        console.error('Error al obtener artículos:', error);
        res.status(500).json({ error: 'Error al obtener los artículos' });
    }
} 