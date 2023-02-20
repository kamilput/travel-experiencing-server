import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Trip } from './Trip';
import { TravelAgency } from '../../config/types';

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

  @Column()
  travelAgency: TravelAgency | null;

  @Column()
  googleUserId: string;

  @OneToMany(() => Trip, (trip) => trip.user)
  trips: Trip[];
}
