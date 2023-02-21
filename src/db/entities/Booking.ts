import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  Board,
  Destinations,
  Hotels,
  TravelAgencies,
} from '../../config/types';

@Entity('Bookings')
export class Booking {
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
  userId: string;
}
