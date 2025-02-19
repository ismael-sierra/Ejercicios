listaDni = [45974893, 85974893, 96325871];

const dniConLetra = () => {
  let dniLetraNum = [];

  listaDni.forEach((el) => {
    dniLetraNum.push({
      dni: el,
      letra: el % 23 <= 6 ? "A" : el % 23 > 6 && el % 23 <= 9 ? "D" : "T",
    });
  });

  console.log(dniLetraNum);
};
dniConLetra();
