import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { createUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    console.log(createUserDto);
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }
}
