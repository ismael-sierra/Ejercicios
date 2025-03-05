**✨ Ejercicio: Manipulación dinámica del DOM avanzada**

A través de cuatro secciones principales (creación, inserción, eliminación y reemplazo de elementos), pondrás a prueba tus conocimientos sobre la manipulación del DOM y los métodos más utilizados en este entorno.

**📋 Descripción general**  
El ejercicio consiste en implementar la funcionalidad de los botones de una página web utilizando JavaScript para interactuar con el DOM. Partirás de un archivo HTML que contiene las estructuras básicas de la página y un archivo CSS con los estilos ya definidos.

**📂 Estructura del proyecto**  
El proyecto tiene la siguiente estructura:

- Un archivo HTML con cuatro secciones diferenciadas: creación, inserción, eliminación y reemplazo.

- Un archivo CSS con estilos predefinidos para los elementos.

- La clase .elemento ya preparada para los nuevos elementos que se van a crear.

- Botones con IDs específicos para cada funcionalidad, lo que facilita su manipulación mediante JavaScript.

**🎯 Objetivos**  
**1. 📝 Sección de creación simple**  
En esta sección, debes implementar la funcionalidad del botón **"Crear Elemento".** Cada vez que se pulse el botón, se debe:

- Crear un nuevo elemento < p >.

- Añadirle la clase **"elemento".**

- Insertarlo en el contenedor con ID **"contenedorNuevos".**

- El texto del nuevo elemento debe ser **"Elemento creado número X"**, donde X es un contador que se incrementa con cada nuevo elemento creado.

**2. 🧭 Sección de inserción posicional**  
Aquí trabajarás con cuatro botones que permiten insertar nuevos elementos en diferentes posiciones relativas a un elemento de referencia marcado con un ⭐. Debes implementar la funcionalidad para estos botones:

- **"Insertar Antes":**  
Crear un nuevo elemento antes del elemento de referencia, con el texto **"Creado elemento antes de referencia".** Usa el método insertBefore().

- **"Insertar Después":**  
Crear un nuevo elemento después del elemento de referencia, con el texto **"Creado elemento después de referencia".** Usa el método insertAdjacentElement('afterend').

- **"Al Inicio":**  
Crear un nuevo elemento al principio del contenedor, con el texto **"Creado elemento al inicio".** Usa el método prepend().

- **"Al Final":**  
Crear un nuevo elemento al final del contenedor, con el texto **"Creado elemento al final".** Usa el método append().

**3. 🗑️ Sección de eliminación**  
En esta sección, deberás implementar la funcionalidad del botón **"Eliminar Último".** Al hacer clic en el botón:

- Se debe identificar el último elemento del contenedor **"contenedorEliminables"**.

- Eliminar ese elemento utilizando el método remove().

- Si no quedan elementos, no se debe realizar ninguna acción.

**4. 🔄 Sección de reemplazo**
Aquí se implementará la funcionalidad del botón **"Reemplazar Elemento"**. Al hacer clic en este botón:

- Se debe identificar el elemento existente en el contenedor.

- Crear un nuevo elemento con el texto **"Elemento reemplazado número X"**.

- Reemplazar el elemento antiguo por el nuevo utilizando el método replaceWith().

**🛠️ Requisitos técnicos**  
Para llevar a cabo este ejercicio, debes cumplir con los siguientes requisitos:

- Mantener un contador global para numerar los elementos creados y reemplazados.

- Crear una función auxiliar **crearElemento()** que:

    - Reciba el texto como parámetro.

    - Cree un elemento < p >.

    - Le añada la clase **"elemento"**.

    - Establezca el texto proporcionado.

    - Retorne el elemento creado.

- Utilizar los métodos del DOM adecuados para cada tarea:

    - createElement() para crear elementos.

    - insertBefore() para insertar antes de un elemento de referencia.

    - insertAdjacentElement() para insertar después.

    - prepend() para insertar al inicio de un contenedor.

    - append() para insertar al final de un contenedor.

    - remove() para eliminar elementos.

    - replaceWith() para reemplazar un elemento existente.

- No modificar el HTML ni el CSS proporcionados.

**⚠️ Notas importantes**  
- Todos los nuevos elementos deben tener la clase **"elemento"**.

- Mantén el contador actualizado para los elementos numerados.

- Asegúrate de comprobar que existan elementos antes de intentar eliminarlos o reemplazarlos.

