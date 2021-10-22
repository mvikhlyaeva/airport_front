import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Flight } from 'src/app/models.ts/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(
    private http: HttpClient
  ) { }

  getAllFlights(): Observable<Flight[]> {
           return this.http.get<Flight[]>('api');          
    }
}
