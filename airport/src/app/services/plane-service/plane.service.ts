import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plane } from 'src/app/models.ts/plane.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private http: HttpClient) {}

  getPlane(planeId: number): Observable<Plane> {
    return this.http.get<Plane>(`api/plane/${planeId}`);          
}
}
