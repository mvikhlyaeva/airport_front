import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Airport } from '../models.ts/airport.model';
import { AirportService } from '../services/airport-service/airport.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

    airports: Airport[];

    constructor(private airportService: AirportService, public dialog: MatDialog,) { 
    }
  
    ngOnInit(): void {
      this.getAllAirports();
    }
  
    getAllAirports(){
        this.airportService.getAllAirport().subscribe(data => {
            console.log('data: ', data);
            
            this.airports = data;
          
        })
    }

}
