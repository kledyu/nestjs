import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Database schema will be created for all classes decorated with it, and Repository can be retrieved and used for it
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
