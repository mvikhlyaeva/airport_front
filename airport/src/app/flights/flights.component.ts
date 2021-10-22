import { Component, OnInit } from '@angular/core';
import { Flight } from '../models.ts/flight.model';
import { FlightService } from '../services/flight-service/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

    flights: Flight[];

  constructor(private flightService: FlightService) { 
      console.log("11");
  }

  ngOnInit(): void {
    this.getAllFlight();
  }

  getAllFlight(){
      this.flightService.getAllFlights().subscribe(data => {
          console.log('data: ', data);
          
          this.flights = data;
          this.flights.forEach(item => {
            item.time = item.departureTime.split('T')[1].substr(0,5);
            item.date = item.departureTime.split('T')[0];
           
            //item.departureTime.getHours()+":"+item.departureTime.getMinutes()
            console.log('item.departureTime: ', item.departureTime);

            console.log('item.time: ', item.time);

        });
      })
  }

}
