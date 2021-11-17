import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from 'src/app/models.ts/pilot.model';

@Component({
  selector: 'app-pilot-card',
  templateUrl: './pilot-card.component.html',
  styleUrls: ['./pilot-card.component.scss']
})
export class PilotCardComponent implements OnInit {

    @Input() pilot: Pilot;
    
  constructor() { }

  ngOnInit(): void {
  }

}
