import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city_id: number;

  @Column({ default: 1 })
  searched: number;

  @Column()
  last_searched: string;
}
