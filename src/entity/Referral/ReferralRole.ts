import { Entity, Column, OneToOne, JoinColumn, Index, PrimaryGeneratedColumn } from 'typeorm'
import { Referral } from '..'
import { IsNumber } from 'class-validator'

@Entity()
export class ReferralRole {
  /**
   * The ID of the referral role. Auto-generated.
   *
   * @type {number}
   * @memberof ReferralRole
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The number of members containing the role.
   *
   * @type {number}
   * @memberof ReferralRole
   */
  @Column()
  @IsNumber()
  members: number

  /**
   * The referral the role is linked to.
   *
   * @type {Referral}
   * @memberof ReferralRole
   */
  @Index({ unique: true })
  @OneToOne(type => Referral, referral => referral.role)
  @JoinColumn()
  referral: Referral

  /**
   * The ID of the Discord role. Not auto-generated, should
   * be passed in implementation.
   *
   * @type {string}
   * @memberof ReferralRole
   */
  @Index({ unique: true })
  @Column('varchar')
  roleId: string
}
