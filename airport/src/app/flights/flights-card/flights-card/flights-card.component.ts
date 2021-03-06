import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from 'src/app/models.ts/flight.model';
import { MatDialog } from '@angular/material/dialog';
import { PpinfoComponent } from '../modal/ppinfo/ppinfo.component';
import { PlaneService } from 'src/app/services/plane-service/plane.service';
import { PilotService } from 'src/app/services/pilot-service/pilot.service';
import { EditFlyComponent } from '../modal/edit-fly/edit-fly.component';
declare let $: any;


@Component({
  selector: 'app-flights-card',
  templateUrl: './flights-card.component.html',
  styleUrls: ['./flights-card.component.scss']
})
export class FlightsCardComponent implements OnInit {

    @Input() flight:Flight;

    @Output() delFlight  = new EventEmitter();

    @Output() changeFlight = new EventEmitter()
    
  constructor(public dialog: MatDialog, private planeService: PlaneService, private pilotService: PilotService) { }

  ngOnInit(): void {
  }

  getInfoPlane(id){
      let plane;
      this.planeService.getPlane(id).subscribe(data => {
          plane = data;
          this.showInfo(plane, "plane");
        }); 
  }

  getInfoPilot(id){
    let pilot;
    this.pilotService.getPilot(id).subscribe(data => {
        pilot = data;
        this.showInfo(pilot, "pilot");
      }); 
}

  async showInfo(item: any, type: string) {
    const dialogRef = this.dialog.open(PpinfoComponent, {
        width: '700px',
        data: {
            item: item,
            title: type
        },
        panelClass: 'choose-modal-green'
    });
}

delete(flight){
    console.log(flight);
    this.delFlight.emit(flight.id);
}

change(flight){
    console.log(flight);
    this.changeFlight.emit(flight);
}



}
