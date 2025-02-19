function modifyArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // Multiplicar por 2 si está en posición par, por 3 si está en posición impar
    let modifiedNum = i % 2 === 0 ? arr[i] * 2 : arr[i] * 3;

    // Restar 5 si el número es mayor que 10
    if (modifiedNum > 10) {
      modifiedNum -= 5;
    }

    result.push(modifiedNum);
  }
  return result;
}

// Ejemplo de uso
const inputArray = [1, 2, 3, 4, 5, 6];
console.log(modifyArray(inputArray));
