import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { BooksController } from './books/books.controller';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'12345678',
      database:'nestdb',
      autoLoadEntities:true,
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    UsersModule,
    BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
