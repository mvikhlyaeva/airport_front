import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Plane } from '../models.ts/plane.model';
import { PlaneService } from '../services/plane-service/plane.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

    planes: Plane[];

  constructor(private planeService: PlaneService, public dialog: MatDialog,) { 
  }

  ngOnInit(): void {
    this.getAllFlight();
  }

  getAllFlight(){
      this.planeService.getAllPlanes().subscribe(data => {
          console.log('data: ', data);
          
          this.planes = data;
        
      })
  }

}
