import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    MongooseModule.forRoot(process.env.DB_URI, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('Database connection successful');
        });

        connection.on('error', (err) => {
          console.error(`Database connection error: ${err}`);
        });

        return connection;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    mongoose.connection.once('open', () => {
      console.log('Mongoose connection established successfully');
    });
  }
}
