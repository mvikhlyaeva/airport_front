import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pilot } from '../models.ts/pilot.model';
import { PilotService } from '../services/pilot-service/pilot.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {

    pilots: Pilot[];

    constructor(private pilotService: PilotService, public dialog: MatDialog,) { 
    }
  
    ngOnInit(): void {
      this.getAllFlight();
    }
  
    getAllFlight(){
        this.pilotService.getAllPilots().subscribe(data => {
            console.log('data: ', data);
            
            this.pilots = data;
          
        })
    }

}
