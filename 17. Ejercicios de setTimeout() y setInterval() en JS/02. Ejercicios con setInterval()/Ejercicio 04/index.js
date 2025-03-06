let count = 0;
const intervalId = setInterval(() => {
  console.log(`Número: ${++count}`);
  if (count === 5) clearInterval(intervalId);
}, 1000);
