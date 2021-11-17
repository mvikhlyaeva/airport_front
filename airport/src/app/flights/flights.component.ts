import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flight } from '../models.ts/flight.model';
import { FlightService } from '../services/flight-service/flight.service';
import { EditFlyComponent } from './flights-card/modal/edit-fly/edit-fly.component';
declare let $: any;
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

    flights: Flight[];

  constructor(private flightService: FlightService, public dialog: MatDialog,) { 
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
        });
      })
  }

  delete(id){
      console.log(id);
      this.flightService.deleteFlight(id).subscribe((data) => {
        this.getAllFlight();
    })
  }

   edit(flight) {
    const dialogRef = this.dialog.open(EditFlyComponent, {
      width: '700px',
      data: { 
          flight: flight,
          add: false
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
          console.log('result: ', result);

        this.flightService.updateFlight(result).subscribe(data=>{
            this.getAllFlight();
        })
        
    $.notify(
      { message: ('Запись успешно изменена') },
      {
        type: 'success', z_index: 1050,
        placement: { from: 'top', align: 'right' }
      });
      }
    });
  }

  add(){
    const dialogRef = this.dialog.open(EditFlyComponent, {
        width: '700px',
        data: { 
            add: true
          }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
            console.log('result: ', result);
  
          this.flightService.addFlight(result).subscribe(data=>{
            this.getAllFlight();
        })
      
        }
      });
    }
  
  

}
