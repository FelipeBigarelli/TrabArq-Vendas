import { User } from '@modules/users/infra/typeorm/entities/User';
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OrdersProducts } from './OrdersProducts';

@Entity('orders')
class Order {
  @PrimaryColumn()
  id?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => OrdersProducts, order_products => order_products.order, {
    cascade: true,
    eager: true
  })
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

export { Order };
