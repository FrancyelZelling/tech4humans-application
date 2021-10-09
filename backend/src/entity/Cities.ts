import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "null" })
  city_name: string;

  @Column()
  city_id: number;

  @Column({ default: 1 })
  searched: number;

  @Column("timestamp with time zone")
  last_searched: string;
}
