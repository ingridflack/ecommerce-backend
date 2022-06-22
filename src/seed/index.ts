import AppDataSource from "../data-source";
import Order from "../model/Order";
import OrderProduct from "../model/OrderProduct";
import Product from "../model/Product";
import productsSeed from "./products.json";

class Seeder {
  private static async clearTable(entity) {
    await AppDataSource.getRepository(entity).query(
      `TRUNCATE TABLE "${entity.toString()}" CASCADE`
    );
  }

  private static async seedProducts() {
    const repository = AppDataSource.getRepository(Product);
    const entities = productsSeed.map((product) => repository.create(product));
    await repository.save(entities);
  }

  public static async seed() {
    try {
      await this.seedProducts();

      console.log("Database seeded successfully");
    } catch {
      console.log("Failure to seed the database");
    }
  }

  public static async clear() {
    try {
      await this.clearTable(Product);
      await this.clearTable(Order);
      await this.clearTable(OrderProduct);

      console.log("Database cleared successfully");
    } catch {
      console.log("Failure to clear the database");
    }
  }

  public static async bootstrap() {
    await this.clear();
    await this.seed();
  }
}

export default Seeder;
