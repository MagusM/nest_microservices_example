import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'payments' })
export class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  amount: number;
}
