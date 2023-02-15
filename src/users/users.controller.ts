import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto, UserDto } from './user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    //Listar Todos Los Usuarios
    @Get()
    async listUsers():Promise<User[]>{
        return this.usersService.listUserAll();
    }
    //Listar Solo Un Usuario Por Medio De Get
    @Get(':id')
    async listUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
        return this.usersService.listOneUser(id);
    }
    //Crear Un Nuevo Usuario
    @Post()
    async createUser(@Body() newUser:CreateUserDto): Promise<User>{
        console.log(newUser);
        const createdUser : User = await this.usersService.createUser(newUser);
        return createdUser;
    }
    //
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe)id: number): Promise<DeleteResult>{
        return this.usersService.deleteUser(id);
    }
    //
    @Put(':id')
    updateUser(
        @Param('id',ParseIntPipe)id:number,
        @Body() updated:UpdateUserDto
    ): Promise<UpdateResult>{
        try{
            return this.usersService.update(id,updated)
        }catch(e: unknown){
            throw e;
        }
    }
}
