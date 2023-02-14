import { PartialType } from "@nestjs/mapped-types"
import { IsNumber, IsDate, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength, MinLength} from "class-validator";

export class UserDto {
    @IsNumber()
    @IsPositive()
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(40)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsString()
    @IsOptional()
    authStrategy?: string;

    @IsDate()
    @IsOptional()
    createdAt?: Date;
} 

export class CreateUserDto extends UserDto{}

export class UpdateUserDto extends PartialType(UserDto) {} 