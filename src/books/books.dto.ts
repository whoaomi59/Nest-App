import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength, IsDate, MaxLength } from "class-validator";

export class BooksDto{
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(10)
    type:string;

    @IsString()
    @IsOptional()
    author?:string;

    @IsDate()
    @IsOptional()
    createdAt?: Date;
}

export class CreateBook extends BooksDto{}