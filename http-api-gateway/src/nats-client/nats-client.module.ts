import { Module } from '@nestjs/common';
import {
  ClientProviderOptions,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';

const natsService: ClientProviderOptions = {
  name: 'NATS_SERVICE',
  transport: Transport.NATS,
  options: {
    servers: ['nasts://nats'],
  },
};

@Module({
  imports: [ClientsModule.register([natsService])],
  exports: [ClientsModule.register([natsService])],
})
export class NatsClientModule {}
