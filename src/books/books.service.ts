import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBook } from './books.dto';
import { Books } from './books.entity';
//Este servicio será responsable del almacenamiento y recuperación de datos
@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Books)
        private booksRepository: Repository<Books>,
    ){}
    //Create Books
    async createBooks(book:CreateBook): Promise<Books>{
        const bookOjb = this.booksRepository.save({
            ...book,
            createdAt: new Date(),
        });
        return bookOjb;
    }
    //Listar
    async listBoks(): Promise<Books[]>{
        return this.booksRepository.find();
    }
}
