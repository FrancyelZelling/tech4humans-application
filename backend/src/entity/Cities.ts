import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city_id: number;

  @Column()
  searched: number;
}
