import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    constructor(first_name: string, last_name: string) {
        this.first_name = first_name
        this.last_name = last_name
    }
}
