import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesGuard } from 'src/auth/roles.guard';
import { BooksController } from './books.controller';
import { Books } from './books.entity';
import { BooksService } from './books.service';

@Module({
    
    providers: [
        BooksService,
        {
          provide: APP_GUARD,
          useClass: RolesGuard
        },],
    imports:[TypeOrmModule.forFeature([Books])],
    controllers:[BooksController],
})

export class BooksModule {}
