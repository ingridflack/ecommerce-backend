import { Router } from "express";
import AppDataSource from "../data-source";
import Product from "../model/Product";

const routes = Router();

routes.get("/", async (_, res) => {
  const products = await AppDataSource.getRepository(Product).find();

  return res.json(products);
});

routes.get("/stock/:id", async (req, res) => {
  const { id } = req.params;
  const { qty_stock } = await AppDataSource.getRepository(Product).findOneBy({
    id,
  });

  return res.json({ qty_stock });
});

routes.post("/", async ({ body }, res) => {
  const { name, qty_stock, price } = body;

  const repository = AppDataSource.getRepository(Product);
  const product = repository.create({ name, qty_stock, price });

  await repository.save(product);

  return res.status(201).json(product);
});

export default routes;
