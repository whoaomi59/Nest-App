import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBook } from './books.dto';
import { Books } from './books.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
 
    constructor(private booksService:BooksService){}

    @Post()
    async createBooks(@Body() newBook:CreateBook){
        const createBook : Books = await this.booksService.createBooks(newBook);
        return createBook;
    }
}
