import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payments } from 'src/typeorm/entities/Payments';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
  ) {}

  createPayment(createPaymentDto: CreatePaymentDto) {
    const newPayment = this.paymentsRepository.create(createPaymentDto);

    return this.paymentsRepository.save(newPayment);
  }
}
