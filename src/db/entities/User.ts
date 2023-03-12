import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Trip } from './Trip';
import { TravelAgencies } from '../../config/types';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

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

  @OneToMany(() => Trip, (trip) => trip.user)
  createdTrips: Trip[];

  @ManyToMany(() => Trip)
  @JoinTable()
  bookedTrips: Trip[];
}
