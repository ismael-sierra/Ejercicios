function filtrarUsuarios(users) {
    return users.filter(user => user.edad > 18 && user.activo);
}

// Ejemplo de uso
const listaUsuarios = [
    { nombre: "Ana", edad: 51, activo: true },
    { nombre: "Ismael", edad: 21, activo: true },
    { nombre: "Manuel", edad: 53, activo: false },
    { nombre: "Julián", edad: 17, activo: true }
];

console.log(filtrarUsuarios(listaUsuarios));