import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'          
  })
}; 

export interface DashboardComponent {
    name: string;
  }

  @Injectable()
export class DashboardService {

  path: string = ""; 

  constructor(private http: HttpClient) {
    this.path = environment.toString();
        httpOptions.headers
  }             

  getPath(): string {
    return this.path;
}


getRecord() {
  return this.http.get('http://localhost:8000/api/Dashboard/', {});
}

  insertRecord(Dashboard: DashboardComponent): Observable<DashboardComponent> {
    return this.http.post<DashboardComponent>('http://localhost:8000/api/Dashboard/', Dashboard);
  }

}