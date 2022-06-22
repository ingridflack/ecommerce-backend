import { Router } from "express";
import AppDataSource from "../data-source";
import Order from "../model/Order";
import OrderProduct from "../model/OrderProduct";
import Product from "../model/Product";

const routes = Router();

routes.get("/", async (_, res) => {
  const orders = await AppDataSource.getRepository(Order).find();

  return res.json(orders);
});

routes.post("/", async ({ body }, res) => {
  const { name, date, products } = body;

  const orderRepository = AppDataSource.getRepository(Order);
  const productRepository = AppDataSource.getRepository(Product);
  const orderProductRepository = AppDataSource.getRepository(OrderProduct);

  // Creates the order entry
  const orderEntity = orderRepository.create({ name, date });
  const order = await orderRepository.save(orderEntity);

  // Creates the order product entry
  const orderProductEntities = products.map((product) =>
    orderProductRepository.create({
      orderId: order.id,
      quantity: product.quantity,
      productId: product.id,
    })
  );
  await orderProductRepository.save(orderProductEntities);

  // Updates the products' available stock
  await Promise.all(
    products.map(({ id, quantity }) =>
      productRepository.decrement({ id }, "qty_stock", quantity)
    )
  );

  return res.status(201).json(order);
});

export default routes;
