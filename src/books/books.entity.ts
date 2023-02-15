import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//Generamos los campos de la base de datos
@Entity()
export class Books{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    author:string

    @Column()
    type:string

    @Column({type:'datetime', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}