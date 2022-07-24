import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // spl table
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  branch: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
