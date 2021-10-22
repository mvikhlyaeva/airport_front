import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightsCardComponent } from './flights/flights-card/flights-card/flights-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PpinfoComponent } from './flights/flights-card/modal/ppinfo/ppinfo.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { FlightService } from './services/flight-service/flight.service';

// import {
//     MatFormFieldModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatTableModule
//   } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightsCardComponent,
    PpinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
    //MatDialog
  ],
  providers: [
    FlightService,
    MatDialog,
    Overlay,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
