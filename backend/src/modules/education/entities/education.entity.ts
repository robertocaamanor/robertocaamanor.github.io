import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('education')
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution: string;

  @Column()
  degree: string;

  @Column()
  period: string;

  @Column()
  location: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
