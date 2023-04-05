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
  id: string;

  @Column()
  tripName: string;

  @Column()
  tripDestination: Destinations;

  @Column()
  tripBoard: Board;

  @Column()
  tripHotel: Hotels;

  @Column()
  tripTravelAgency: TravelAgencies;

  @Column({ type: 'timestamptz' })
  tripStartDate: Date;

  @Column({ type: 'timestamptz' })
  tripEndDate: Date;

  @Column()
  tripPrice: number;

  @Column()
  tripImage: string;

  @Column()
  tripDescription: string;

  @ManyToOne(() => User, (user) => user.createdTrips, {
    onDelete: 'CASCADE',
  })
  user: User;
}
