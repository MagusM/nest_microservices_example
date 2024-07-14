import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'payments' })
export class Payments {
  constructor(partial: Partial<Payments>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  amount: number;

  @ManyToOne(() => User, (user) => user.payments)
  user: User;
}
