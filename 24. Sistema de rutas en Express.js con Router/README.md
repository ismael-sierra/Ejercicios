## ➡️⬅️Sistema de rutas en Express.js con Router

El objetivo de este ejercicio es desarrollar una **API REST** utilizando **Express.js** que implemente un sistema de rutas distribuido en tres módulos principales: **Home, Usuarios y Productos**. Este ejercicio tiene como propósito practicar el manejo de distintos tipos de rutas y parámetros dentro de una API. Los endpoints de la API deben retornar respuestas en formato **JSON** cuando se requiera devolver algún dato.

### Detalles adicionales

- **Interfaz gráfica:** No se proporcionará una interfaz gráfica para interactuar con la API. Todas las peticiones deberán enviarse mediante un archivo **client.js**, que se encargará de hacer las solicitudes HTTP a la API y manejar las respuestas.
- **Formato de respuesta:** Todos los endpoints que devuelvan información (por ejemplo, listas de usuarios o productos) deben retornar respuestas en formato **JSON**, especificando claramente los parámetros recibidos y la información solicitada.
- **Endpoints de rutas:** Las rutas estarán organizadas en tres módulos de Express.js, asegurando que acepten parámetros adecuados y devuelvan respuestas en el formato indicado.

### Rutas a implementar

#### 1. Home Routes `(homeRoutes.js)`
- GET /: Recupera la raíz, con parámetros de consulta para **idioma** y **tema**. Devuelve estos datos.
- GET /about: Obtiene información acerca de la sección **about**, con detalles opcionales.
- POST /contact: Recibe datos de contacto y los devuelve.

#### 2. User Routes `(userRoutes.js)`
- GET /users: Devuelve una lista de usuarios con filtros opcionales por **edad** y **ciudad**.
- GET /users/new: Crea un nuevo usuario con un parámetro **rol**.
- GET /users/:id/profile: Muestra el perfil del usuario identificado por **id**.
- POST /users: Crea un nuevo usuario en el sistema.
- PUT /users/:id: Permite actualizar los datos de un usuario específico.
- DELETE /users/:id: Elimina un usuario tras confirmar la acción.
- GET /users/:id/posts/:postId: Muestra los posts de un usuario específico.
- GET /users/search: Permite realizar una búsqueda avanzada de usuarios.

#### 3. Product Routes `(productRoutes.js)`
- GET /products: Recupera una lista de productos con filtros múltiples.
- GET /products/featured: Obtiene productos destacados, con un límite y categoría.
- GET /products/categories/:mainCategory?: Muestra productos filtrados por una categoría principal y opcionalmente por subcategorías.
- POST /products: Permite la creación de un nuevo producto.
- GET /products/:id/reviews: Recupera reseñas de un producto especificado por su **id**, con filtros.
- POST /products/:id/reviews: Permite añadir una nueva reseña a un producto específico.
- PUT /products/:id: Actualiza los detalles de un producto.
- GET /products/search: Permite realizar una búsqueda avanzada de productos.

### Requisitos de implementación

- **Archivo app.js:**  
El archivo principal del servidor debe estar correctamente configurado para gestionar las rutas y habilitar el servidor.

- **Uso de express.Router() en cada archivo de rutas:**  
Cada uno de los módulos de rutas (Home, Usuarios, Productos) debe usar el método express.Router() para definir y organizar las rutas de manera modular.

- **Manejo de parámetros:**  
Es necesario implementar correctamente los tres tipos de parámetros que se manejan en Express.js:

    - **Parámetros de consulta** (query): Para filtros o configuraciones como idioma, tema, edad, etc.
    - **Parámetros de ruta** (route): Como **id** de usuario o producto.
    - **Parámetros en el cuerpo** (body): Para datos que se envían en una solicitud POST o PUT.
