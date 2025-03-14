const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Creamos una interfaz de lectura para capturar las entradas en la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntamos el nombre de la carpeta que vamos a crear
rl.question("Introduce el nombre de la carpeta: ", (folderName) => {
  const folderPath = path.join(__dirname, folderName); // Generamos la ruta de la carpeta

  // Comprobamos si la carpeta ya existe
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath); // Creamos la carpeta si no existe
    console.log(`Carpeta '${folderName}' creada exitosamente.`);
  } else {
    console.log("La carpeta ya existe.");
  }

  rl.question(
    "Introduce el nombre del archivo (con extensión): ",
    (fileName) => {
      const filePath = path.join(folderPath, fileName); // Generamos la ruta del archivo

      fs.writeFileSync(filePath, ""); // Creamos el archivo vacío
      console.log(
        `Archivo '${fileName}' creado en la carpeta '${folderName}'.`
      );

      function writeToFile() {
        rl.question(
          "Escribe una línea de texto (o presiona Enter para finalizar): ",
          (line) => {
            // Si presionamos Enter sin escribir nada
            if (line.trim() === "") {
              console.log("Contenido del archivo:");
              // Mostramos el contenido del archivo en la consola
              console.log(fs.readFileSync(filePath, "utf8"));
              rl.close(); // Cerramos la interfaz de lectura
            } else {
              fs.appendFileSync(filePath, line + "\n"); // Agregamos la línea con un salto de línea
              writeToFile();
            }
          }
        );
      }

      writeToFile();
    }
  );
});
