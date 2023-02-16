import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateBook } from './books.dto';
import { Books } from './books.entity';
import { BooksService } from './books.service';

@Controller('books')
@UseGuards(RolesGuard)
export class BooksController {
 
    constructor(private booksService:BooksService){}
    @Get()
    @Roles('admin')
    async listBooks(): Promise<Books[]>{
        return this.booksService.listBoks();
    }

    @Post()
    async createBooks(@Body() newBook:CreateBook){
        const createBook : Books = await this.booksService.createBooks(newBook);
        return createBook;
    }
}
