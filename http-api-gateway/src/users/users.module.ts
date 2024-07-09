import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { UserController } from './users.controller';

@Module({
  controllers: [UserController],
  imports: [NatsClientModule],
  providers: [],
})
export class UsersModule {}
