import { Component, Input, OnInit } from '@angular/core';
import { Plane } from 'src/app/models.ts/plane.model';

@Component({
  selector: 'app-plane-card',
  templateUrl: './plane-card.component.html',
  styleUrls: ['./plane-card.component.scss']
})
export class PlaneCardComponent implements OnInit {

    @Input() plane:Plane;
    
  constructor() { }

  ngOnInit(): void {
      console.log(this.plane);
  }

}
