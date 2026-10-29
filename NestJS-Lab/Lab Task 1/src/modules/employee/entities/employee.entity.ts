import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  email!: string;

  @Column({ type: 'varchar' })
  phone!: string;

  @Column({ type: 'varchar' })
  password!: string;

  @Column({ type: 'integer' })
  age!: number;

  @Column({ type: 'integer' })
  yearsOfWorking!: number;
}