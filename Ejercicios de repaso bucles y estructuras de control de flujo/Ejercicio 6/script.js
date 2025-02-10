let N = 5;
let suma = 0;
let i = 1;

while (i <= N) {
  suma += i;
  i++;
}

document.getElementById(
  "resultado"
).textContent = `La suma de los números del 1 al ${N} es: ${suma}`;
