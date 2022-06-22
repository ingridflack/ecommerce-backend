import "reflect-metadata";
import { DataSource } from "typeorm";
import Order from "./model/Order";
import OrderProduct from "./model/OrderProduct";
import Product from "./model/Product";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ecommerce",
  port: 5432,
  username: "docker",
  password: "ecommerce",
  database: "ecommerce",
  entities: [Order, Product, OrderProduct],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
