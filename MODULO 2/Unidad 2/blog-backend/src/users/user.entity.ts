import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Payment } from '../payments/payment.entity';  
import { Order } from '../orders/order.entity';        

@Entity('users')  
export class User {
    [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;  

  @Column({ type: 'varchar', nullable: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  profile: string;

  @Column({ type: 'enum', enum: ['customer', 'employee'], default: 'customer' })
  role: 'customer' | 'employee';

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Payment, (payment) => payment.user)
  payments: Payment[];
    invoices: any;
}
