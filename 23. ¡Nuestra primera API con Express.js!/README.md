## 💥 ¡Nuestra primera API con Express.js!

El objetivo de este ejercicio es crear un servidor básico utilizando **Node.js** y el framework **Express**, con los métodos **GET** y **POST**. El servidor debe tener varios endpoints que permitan consultar o enviar datos mediante estas solicitudes. También se deberá crear un cliente que realice peticiones HTTP a estos endpoints para probar su funcionamiento.

### Requisitos:

1. Servidor Node.js:
    -  Crea un archivo server.js en el que utilizarás el framework **Express** para configurar el servidor.
2. Debes crear las siguientes rutas en el servidor, asegurándote de que solo se utilicen los métodos **GET** y **POST**:
   - **GET /api**: Este endpoint debe recibir dos parámetros en la URL, nombre y edad, y devolver un mensaje que salude al usuario, utilizando esos parámetros.
   - **GET /api/:nombre**: Este endpoint debe recibir el nombre de la persona como un parámetro de ruta (:nombre) y devolver un mensaje personalizado con ese nombre.
   - **POST /registro**: Este endpoint debe recibir un cuerpo en formato JSON con los campos nombre, edad y mail, y devolver un mensaje confirmando la recepción de esos datos.
   - **POST /actualizar**: Este endpoint debe recibir un cuerpo en formato JSON con los campos nombre, edad y mail para actualizar los datos de un usuario. La respuesta debe devolver los nuevos datos del usuario.
   - **POST /eliminar**: Este endpoint debe recibir un cuerpo en formato JSON con el campo nombre para eliminar a un usuario. La respuesta debe confirmar la eliminación.
   - **GET /usuarios**: Este endpoint debe devolver una lista de usuarios registrados en el servidor. La respuesta debe ser un array de objetos que contengan los campos nombre, edad y mail de cada usuario registrado.  

Todas las respuestas de mi servidor deben devolver un objeto donde se contemple el dato success, para confirmar que se ha realizado correctamente la petición.  
   Ejemplo: 
   ```json
   { "success": "OK", "message": "Bienvenido David" }
   ```  
También, deberán devolver el código 200 como estado de la petición.  

**1. Cliente (client.js):**  
- Crea un archivo client.js que actúe como cliente y realice las siguientes solicitudes HTTP a los endpoints del servidor utilizando **fetch**:  
Las peticiones que el cliente debe realizar son:
- **GET** a /api con los parámetros nombre y edad en la URL.
- **GET** a /api/:nombre con un parámetro de ruta que contenga el nombre del usuario.
- **POST** a /registro enviando un cuerpo JSON con los datos del usuario (nombre, edad, mail).
- **POST** a /actualizar enviando un cuerpo JSON con los nuevos datos (nombre, edad, mail) para actualizar la información de un usuario.
- **POST** a /eliminar enviando un cuerpo JSON con el nombre del usuario a eliminar.
- **GET** a /usuarios para obtener y mostrar la lista completa de usuarios registrados.

**2. Ejecución:**  
- Asegúrate de que tanto el servidor (server.js) como el cliente (client.js) estén correctamente implementados.
- Para probar tu implementación:
    - Ejecuta el servidor (server.js) en la terminal.
    - Luego, ejecuta el cliente (client.js) para hacer las peticiones y recibir las respuestas.