import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './payments/payments.module';
import { Payments } from './typeorm/entities/Payments';

@Module({
  imports: [
    PaymentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      database: 'nestjs_db',
      entities: [Payments],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
