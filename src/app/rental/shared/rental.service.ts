import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Rental } from './rental.model';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: Rental[] = [{
    id: "1",
    title: "Hosh Posh Apartment",
    city: "New York",
    street: "Central Street",
    category: "Apartment",
    image: "http://via.placehoder.com/350x250",
    bedrooms: 3,
    description: "Very nice Apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "19/10/2019"
  },
  {
    id: "2",
    title: "New Green Apartment",
    city: "Liverpool",
    street: "City Center",
    category: "Apartment",
    image: "http://via.placehoder.com/350x250",
    bedrooms: 3,
    description: "Very nice Apartment",
    dailyRate: 21,
    shared: false,
    createdAt: "19/10/2019"
  },
  {
    id: "3",
    title: "Radisson Blue",
    city: "London",
    street: "Sector 21, Dwarka",
    category: "Apartment",
    image: "http://via.placehoder.com/350x250",
    bedrooms: 3,
    description: "Very nice Apartment",
    dailyRate: 10,
    shared: true,
    createdAt: "19/10/2019"
  },
  {
    id: "4",
    title: "Condium",
    city: "California",
    street: "Hebbal Main Street",
    category: "Condo",
    image: "http://via.placehoder.com/350x250",
    bedrooms: 3,
    description: "Very nice Apartment",
    dailyRate: 18,
    shared: false,
    createdAt: "19/10/2019"
  }]
  constructor() { }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 500);
    });
  }

  public getRentalById(rentalId: String): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
        });
        observer.next(foundRental);
      }, 500);
    });
  }

}
