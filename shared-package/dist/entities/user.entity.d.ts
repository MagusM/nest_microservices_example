import { PaymentEntity } from "./payment.entity";
export declare class UserEntity {
    constructor(partial: Partial<UserEntity>);
    id: string;
    username: string;
    displayName: string;
    email: string;
    payments: PaymentEntity[];
}
