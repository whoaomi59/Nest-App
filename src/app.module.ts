import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { logger, LoggerMiddleware } from './middleware/logger.middleware';
import { BooksController } from './books/books.controller';

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
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'books', method: RequestMethod.POST },
        'books/(.*)',
      )
      .forRoutes(BooksController);
  }
  
}
