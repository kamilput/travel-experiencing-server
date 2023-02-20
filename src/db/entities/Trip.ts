import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('Trips')
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  destination: string;

  @Column()
  board: string;

  @Column()
  hotel: string;

  @Column()
  travelAgency: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.trips)
  user: User;
}
