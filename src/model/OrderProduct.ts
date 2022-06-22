import { IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import Order from "./Order";
import Product from "./Product";

@Entity()
class OrderProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  orderId: string;

  @Column()
  productId: string;

  @Column("integer")
  @IsNotEmpty()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.orderProducts)
  @IsNotEmpty()
  product: Product;

  @ManyToOne(() => Order, (order) => order.orderProducts)
  @IsNotEmpty()
  order: Order;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  public static toString = () => "order_product";
}

export default OrderProduct;
