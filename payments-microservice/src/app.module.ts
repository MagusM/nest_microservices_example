import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    PaymentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      database: 'nestjs_db',
      entities: [],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
