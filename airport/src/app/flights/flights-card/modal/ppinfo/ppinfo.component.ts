import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ppinfo',
  templateUrl: './ppinfo.component.html',
  styleUrls: ['./ppinfo.component.scss']
})
export class PpinfoComponent implements OnInit {

    type: string;
    item: any;

  constructor(public dialogRef: MatDialogRef<PpinfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
        console.log('this.data: ', this.data);
      this.item = this.data.item;
      console.log('this.item: ', this.item);
      this.type = this.data.title;
      console.log('this.type: ', this.type);
  }

  ngOnInit(): void {
  }

}
