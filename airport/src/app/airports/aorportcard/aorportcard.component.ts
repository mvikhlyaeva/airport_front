import { Component, Input, OnInit } from '@angular/core';
import { Airport } from 'src/app/models.ts/airport.model';

@Component({
  selector: 'app-aorportcard',
  templateUrl: './aorportcard.component.html',
  styleUrls: ['./aorportcard.component.scss']
})
export class AorportcardComponent implements OnInit {
 
    @Input() airport: Airport;

  constructor() { }

  ngOnInit(): void {
  }

}
