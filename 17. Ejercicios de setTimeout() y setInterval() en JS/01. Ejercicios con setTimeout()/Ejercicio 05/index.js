const idTimeout = setTimeout(() => {
  console.log("Este mensaje nunca se mostrará");
}, 4000);
clearTimeout(idTimeout);
