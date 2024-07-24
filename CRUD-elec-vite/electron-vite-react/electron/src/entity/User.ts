import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    username: string | undefined ;

    @Column()
    password: string | undefined ;
    
    @Column()
    email: string | undefined;
}