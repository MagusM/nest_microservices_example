import { UserEntity } from './user.entity';
export declare class PaymentEntity {
    constructor(partial: Partial<PaymentEntity>);
    id: string;
    amount: number;
    user: UserEntity;
}
