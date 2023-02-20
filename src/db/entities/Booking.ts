import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Bookings')
export class Booking {
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
  userId: string;
}
