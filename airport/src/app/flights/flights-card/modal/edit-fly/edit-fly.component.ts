import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models.ts/flight.model';
import { Pilot } from 'src/app/models.ts/pilot.model';
import { Plane } from 'src/app/models.ts/plane.model';
import { AirportService } from 'src/app/services/airport-service/airport.service';
import { FlightService } from 'src/app/services/flight-service/flight.service';
import { PilotService } from 'src/app/services/pilot-service/pilot.service';
import { PlaneService } from 'src/app/services/plane-service/plane.service';

@Component({
  selector: 'app-edit-fly',
  templateUrl: './edit-fly.component.html',
  styleUrls: ['./edit-fly.component.scss']
})
export class EditFlyComponent implements OnInit {

    newFlight: Flight = new Flight;
    allPlanes: any;
    allPilots: any;
    allAirports: any;
    new: boolean;

  constructor(public dialogRef: MatDialogRef<EditFlyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private planeService: PlaneService, private pilotService: PilotService,
    private flightService: FlightService, private airportService: AirportService) { 
        console.log('this.flight: ', this.data.flight); 
        this.new = this.data.add;
        if(this.data.flight){
            this.newFlight.id = this.data.flight.id;
            this.newFlight.date = this.data.flight.date;
            this.newFlight.time = this.data.flight.time;
            this.newFlight.departureCity = this.data.flight.departureCity;
            this.newFlight.arrivalCity = this.data.flight.arrivalCity;
            this.newFlight.pilotId = this.data.flight.pilotId;
            this.newFlight.planeId = this.data.flight.planeId;
            this.newFlight.airportId = this.data.flight.airportId;
            console.log('this.newFlight: ', this.newFlight);
        }

        this.pilotService.getAllPilots().subscribe(data =>{
            this.allPilots = data;
            console.log('this.allPilots: ', this.allPilots);
        })
        this.planeService.getAllPlanes().subscribe(data =>{
          this.allPlanes = data;
          console.log('this.allPlanes: ', this.allPlanes);
      })
      this.airportService.getAllAirport().subscribe(data =>{
        this.allAirports = data;
    })


    }

  ngOnInit(): void {
      
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.newFlight.departureTime = this.newFlight.date+"T"+this.newFlight.time;
    this.dialogRef.close(this.newFlight);
  }

}
