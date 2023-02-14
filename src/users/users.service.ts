import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from './user.entity';


@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}
    //Crear Usarios
    async createUser(user:CreateUserDto): Promise<User> {
    const userObj = this.usersRepository.save({
        ...user,
        createdAt: new Date(),
        authStrategy: 'local',
    });
        return userObj;
    }
    //Listar Todos Los Usarios
    async listUserAll(): Promise<User[]>{
        return this.usersRepository.find();
    }
    //Listar Un Usuario
    listOneUser(id: number): Promise<User>{
        return this.usersRepository.findOne({
            where:{
                id:id
            }
        });
    }
    //Eliminar Usuario
    deleteUser(id: number): Promise<DeleteResult>{
        return this.usersRepository.delete({ id  })
    }
    //Actualizar Usuarios
    async update(id: number, user:UpdateUserDto): Promise<UpdateResult>{
        const userExist:User = await this.listOneUser(id);
        if(userExist){
            const updatedUser: UpdateResult = await this.usersRepository.update(id,user);
            return updatedUser;
        }else{
            throw new NotFoundException();
        }
    }
}
