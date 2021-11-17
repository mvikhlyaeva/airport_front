import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from 'src/app/models.ts/airport.model';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(
    private http: HttpClient
  ) { }

  getAllAirport(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`api/airport`); 
}
}
