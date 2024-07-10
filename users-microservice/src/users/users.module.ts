import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from 'src/typeorm/entities/Payments';
import { User } from 'src/typeorm/entities/User';
import { UsersMicroserviceController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payments])],
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
})
export class UserModule {}
