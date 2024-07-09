import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { createUserDto } from './dtos/CreateUser.dto';

@Controller()
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: createUserDto) {
    console.log(data);

    return data;
  }

  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log('Payment created trigger use_api', data);
  }
}
