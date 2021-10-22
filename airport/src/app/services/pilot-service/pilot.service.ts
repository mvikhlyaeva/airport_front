import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from 'src/app/models.ts/pilot.model';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(
    private http: HttpClient
  ) { }

  getPilot(pilotId: number): Observable<Pilot> {
    return this.http.get<Pilot>(`api/pilot/${pilotId}`);          
}
}
