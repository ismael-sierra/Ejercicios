<strong>🔄 Ejercicio 9: Validar Propiedades en un Objeto</strong>

<strong>Enunciado:</strong>  
Crea una función llamada validarPropiedades que reciba un objeto y un array de claves.

- Devuelve true si el objeto contiene <strong>todas las claves</strong> del array, o false en caso contrario.

- Usa Object.keys() y for...in.

<strong>Ejemplo:</strong>
```
validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"]);
// Resultado esperado: true

validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"]);
// Resultado esperado: false
```