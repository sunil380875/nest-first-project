import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create({ name, email, role }: CreateUserDto) {
    const user = await this.userModel.create({ name, email, role });
    return { name, email, role };
  }
  update({ name, email, role, id }: UpdateUserDto) {
    return { name, email, role, id };
  }
}
