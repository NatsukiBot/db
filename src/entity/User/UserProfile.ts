import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Index } from 'typeorm'
import { User } from '.'
import { IsString } from 'class-validator'
@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn() id: number

  @Column('varchar')
  @IsString()
  title: string

  @Column('varchar')
  @IsString()
  bio: string

  @Column('varchar')
  @IsString()
  background: string

  @Index({ unique: true })
  @OneToOne(type => User, user => user.profile)
  @JoinColumn()
  user: User

  constructor () {
    this.title = ''
    this.bio = ''
    this.background = 'default'
  }
}
