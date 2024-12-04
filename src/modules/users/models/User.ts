import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    password: string

    constructor(first_name: string, last_name: string, email: string, password: string) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.password = password
    }
}
