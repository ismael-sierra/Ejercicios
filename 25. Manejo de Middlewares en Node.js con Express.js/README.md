## ⏩ Manejo de Middlewares en Node.js con Express.js

Partiendo del ejercicio **“Sistema de rutas en Express.js con Router”**, donde habéis definido una API utilizando Node.js y Express, con su enrutamiento correspondiente mediante Router, necesitamos **<u>añadir algunas funcionalidades adicionales:</u>**

**1. Middleware de rutas no encontradas:**  
Se debe crear un middleware que se ejecute cuando una ruta no sea encontrada, y que devuelva un error con el código de estado 404.

**2. Middleware de control de flujo:**  
Implementar un middleware que utilice next() para pasar al siguiente endpoint. Este middleware debe ser ejecutado en alguna de las rutas definidas de la API.

**3. Middleware de manejo de errores:**  
Crear un middleware que maneje los errores generados en las rutas, utilizando el parámetro next() para que los errores sean pasados al middleware de manejo de errores. Este middleware debe ser capaz de devolver una respuesta con el error y su descripción.

**4. Estructuración en carpetas:**  
Los middlewares deben estar separados en una carpeta llamada middlewares y ser importados en el archivo principal del servidor (app.js), de modo que se mantenga una estructura modular y organizada del proyecto.

### Requisitos adicionales

- El middleware de manejo de errores debe devolver una respuesta con el código de estado adecuado y el mensaje de error.
- La aplicación debe ser capaz de registrar el error de forma clara en la consola para facilitar la depuración.
- Los middlewares deben ser reutilizables y fáciles de mantener.
