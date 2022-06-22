import { isInt, IsNotEmpty, Min } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import OrderProduct from "./OrderProduct";

@Entity()
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  @IsNotEmpty()
  name: string;

  @Column("int")
  @IsNotEmpty()
  @Min(0)
  qty_stock: number;

  @Column("float")
  price: number;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProducts: OrderProduct[];

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  public static toString = () => "product";
}

export default Product;
