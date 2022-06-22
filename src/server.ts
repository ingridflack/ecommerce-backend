import express from "express";
import ordersRoutes from "./routes/orders.routes";
import productsRoutes from "./routes/products.routes";
import AppDataSource from "./data-source";
import Seeder from "./seed";

const cors = require("cors");

AppDataSource.initialize()
  .then(async () => {
    await Seeder.bootstrap();

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/orders", ordersRoutes);
    app.use("/products", productsRoutes);

    app.listen(3333, () => {
      console.log("App is running on https://localhost:3333");
    });
  })
  .catch((error) => console.log(error));
