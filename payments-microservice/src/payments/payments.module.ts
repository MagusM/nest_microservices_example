import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity, UserEntity } from 'shared-package';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsMicroserviceController } from './payments.controller';
import { PaymentsService } from './payments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PaymentEntity, UserEntity]),
    NatsClientModule,
  ],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
