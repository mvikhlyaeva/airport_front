import { InjectionToken, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { EditFlyComponent } from './flights/flights-card/modal/edit-fly/edit-fly.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { AirportsComponent } from './airports/airports.component';
import { PlanesComponent } from './planes/planes.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PlaneCardComponent } from './planes/plane-card/plane-card.component';
import { PilotCardComponent } from './pilots/pilot-card/pilot-card.component';
import { AorportcardComponent } from './airports/aorportcard/aorportcard.component'

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
    PpinfoComponent,
    EditFlyComponent,
    AirportsComponent,
    PlanesComponent,
    PilotsComponent,
    PlaneCardComponent,
    PilotCardComponent,
    AorportcardComponent
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
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule
   // NgSelectModule
  ],
  providers: [
    FlightService,
    MatDialog,
    Overlay,
    
  ],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
