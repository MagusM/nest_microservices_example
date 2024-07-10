import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';
import { Payments } from 'src/typeorm/entities/Payments';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dto/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payments)
    private paymentsRepository: Repository<Payments>,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, createPaymentDto.userId),
    );
    const newPayment = this.paymentsRepository.create({
      ...createPaymentDto,
      user: user.id,
    });

    return this.paymentsRepository.save(newPayment);
  }
}
