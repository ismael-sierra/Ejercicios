const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());
app.use(cors());

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
