import { IsDate, IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import OrderProduct from "./OrderProduct";

@Entity()
class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  @IsNotEmpty()
  name: string;

  @Column("date")
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  @IsNotEmpty()
  orderProducts: OrderProduct[];

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  public static toString = () => "order";
}

export default Order;
