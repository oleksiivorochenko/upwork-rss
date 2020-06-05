  
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity("jobs")
export class Job extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: null })
  title: string

  @Column({ default: null })
  link: string

  @Column({ default: null })
  description?: string

  @Column({ default: null })
  pubDate: Date
}