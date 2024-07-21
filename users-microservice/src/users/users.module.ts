import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity, UserEntity } from 'shared-package';
import { UsersMicroserviceController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PaymentEntity])],
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
})
export class UserModule {}
