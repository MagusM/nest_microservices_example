import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Payments } from './Payments';

@Entity({ name: 'users' })
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: true })
  displayName: string;

  @Column({ nullable: true })
  email: string;

  @OneToMany(() => Payments, (payments) => payments.user)
  payments: Payments[];
}
