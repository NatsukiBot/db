import { GiveawayItem, Giveaway } from '.'
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Index, JoinColumn } from 'typeorm'
import { IsString } from 'class-validator'

@Entity()
export class GiveawayItemKey {
  /**
   * The ID of the GiveawayItemKey object. Auto-generated.
   *
   * @type {number}
   * @memberof GiveawayItemKey
   */
  @PrimaryGeneratedColumn() id: number

  /**
   * The key of the item. Should be a redeemable key for the item.
   *
   * @type {string}
   * @memberof GiveawayItemKey
   */
  @Index({ unique: true })
  @Column('varchar')
  @IsString()
  key: string

  /**
   * The item that the key is for.
   *
   * @type {GiveawayItem}
   * @memberof GiveawayItemKey
   */
  @OneToOne(type => GiveawayItem, item => item.giveaway)
  @JoinColumn()
  giveawayItem: GiveawayItem

  /**
   * The giveaway that item that the key is for is for.
   *
   * @type {Giveaway}
   * @memberof GiveawayItemKey
   */
  @OneToOne(type => Giveaway)
  @JoinColumn()
  giveaway: Giveaway
}
