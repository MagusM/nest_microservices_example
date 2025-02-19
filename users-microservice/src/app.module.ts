import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity, UserEntity } from 'shared-package';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      database: 'nestjs_db',
      entities: [UserEntity, PaymentEntity],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
