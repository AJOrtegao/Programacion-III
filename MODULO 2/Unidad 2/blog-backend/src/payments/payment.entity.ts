import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Order } from '../orders/order.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  amount: number;

  @Column({ type: 'timestamp'})
  paymentDate: Date;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;

  @OneToMany(() => Order, (order) => order.payment)
  orders: Order[];
}
