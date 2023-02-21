import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import {
  Board,
  Destinations,
  Hotels,
  TravelAgencies,
} from '../../config/types';

@Entity('Trips')
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  destination: Destinations;

  @Column()
  board: Board;

  @Column()
  hotel: Hotels;

  @Column()
  travelAgency: TravelAgencies;

  @Column({ type: 'timestamptz' })
  startDate: Date;

  @Column({ type: 'timestamptz' })
  endDate: Date;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  // @ManyToOne(() => User, (user) => user.trips)
  // user: User;
}
