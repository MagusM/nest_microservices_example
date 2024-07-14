import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }

  //todo: check implementation if needed ?
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, id),
    );

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }
}
