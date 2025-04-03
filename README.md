## Características

- Autenticación de usuarios con JWT
- Gestión de usuarios (creación y login)
- Base de datos MySQL con Sequelize
- API RESTful

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/dev-ajras/template-ts-express-sequelize
cd template-ts-express-sequelize
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tu_db
JWT_SECRET=tu_secreto_jwt
```

4. Iniciar la base de datos:
```bash
# Asegúrate de tener MySQL corriendo
# Crea la base de datos:
mysql -u root -p
CREATE DATABASE tu_db;
```

## Uso

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm start
```

### Crear un nuevo usuario
```bash
ts-node src/scripts/createUser.ts <username> <password>
```

## Estructura del Proyecto

```
src/
├── controllers/     # Controladores de la API
├── models/          # Modelos de la base de datos
├── services/        # Lógica de negocio
├── scripts/         # Scripts de utilidad
└── utils/           # Utilidades y configuraciones
```

## API Endpoints

### Autenticación
- `POST /api/auth/login` - Iniciar sesión

Crear usuario (a través del script)

## Tecnologías Utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- Sequelize
- JWT
- Bcrypt

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia ISC. 