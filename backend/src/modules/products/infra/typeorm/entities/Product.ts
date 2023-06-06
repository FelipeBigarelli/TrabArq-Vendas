import { OrdersProducts } from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('products')
class Product {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @OneToMany(() => OrdersProducts, order_products => order_products.product)
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

    constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Product };
