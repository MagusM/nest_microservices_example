import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'payment' })
export class PaymentEntity {
  constructor(partial: Partial<PaymentEntity>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  amount: number;

  @ManyToOne(() => UserEntity, (user) => user.payments)
  user: UserEntity;
}
