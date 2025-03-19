const express = require("express");
const app = express();
const PORT = 3000;

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const requestLogger = require("./middlewares/requestLogger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(requestLogger);

app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
