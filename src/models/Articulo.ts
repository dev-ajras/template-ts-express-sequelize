import { Model, DataTypes } from 'sequelize';
import sequelize from '../utils/databaseService';

class Articulo extends Model {
    public Isbn!: string;
    public Titulo!: string;
    public Autor!: string;
    public Coleccion!: string | null;
    public Sello_id!: number;
    public Sello!: string;
    public Clase!: string;
    public Precio!: number;
    public Disponible!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Articulo.init(
    {
        Isbn: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        Titulo: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Autor: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        Coleccion: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        Sello_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        Sello: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        Clase: {
            type: DataTypes.CHAR(1),
            allowNull: false,
        },
        Precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        Disponible: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName: 'Articulo',
        tableName: 'articulos',
        timestamps: true
    }
);

export default Articulo; 