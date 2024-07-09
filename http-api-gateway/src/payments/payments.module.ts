import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { PaymentsController } from './payments.controller';

@Module({
  controllers: [PaymentsController],
  imports: [NatsClientModule],
  providers: [],
})
export class PaymentsModule {}
