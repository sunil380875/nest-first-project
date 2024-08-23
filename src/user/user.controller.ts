import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get() //get all user
  getAll(@Query() name: string) {
    return [name];
  }
  @Post()
  create(
    @Body(ValidationPipe)
    { name, email, role }: CreateUserDto,
  ) {
    const createDate = this.userService.create({ name, email, role });
    return createDate;
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    { name, email, role }: UpdateUserDto,
  ) {
    const updatedData = this.userService.update({ name, email, role, id });
    return updatedData;
  }

  @Get(':id') //get one user
  getOne(@Param('id') id: string) {
    return {
      id,
    };
  }
}
