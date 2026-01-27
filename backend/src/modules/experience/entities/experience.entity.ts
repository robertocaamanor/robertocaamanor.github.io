import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('experiences')
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company: string;

  @Column()
  position: string;

  @Column({ nullable: true })
  period: string;

  @Column({ nullable: true })
  startDate: string; // Formato: YYYY-MM

  @Column({ nullable: true })
  endDate: string; // Formato: YYYY-MM o null para actualidad

  @Column()
  location: string;

  @Column()
  type: string;

  @Column('text')
  description: string;

  @Column('simple-array')
  skills: string[];

  @Column({ nullable: true })
  logo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
