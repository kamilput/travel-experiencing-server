import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Trip } from './Trip';
import { TravelAgencies } from '../../config/types';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column({ type: 'varchar', nullable: true })
  travelAgency: TravelAgencies | null;

  @Column()
  googleUserId: string;

  @ManyToMany(() => Trip)
  @JoinTable()
  createdTrips: Trip[];

  @ManyToMany(() => Trip)
  @JoinTable()
  bookedTrips: Trip[];
}
