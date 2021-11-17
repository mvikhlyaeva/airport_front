import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { FlightsComponent } from './flights/flights.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: FlightsComponent },
    { path: 'app/airports', component: AirportsComponent },
    { path: 'app/pilots', component: PilotsComponent },
    { path: 'app/planes', component: PlanesComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
