import { Module } from '@nestjs/common';
import { NatsClientModule } from './nats-client/nats-client.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NatsClientModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
