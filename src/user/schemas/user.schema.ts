import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop({ enum: ['Admin', 'User'] })
  role: 'Admin' | 'User';
}

const UserSchema = SchemaFactory.createForClass(User);
export { UserSchema };
