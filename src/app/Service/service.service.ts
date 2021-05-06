import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Week } from '../Model/week';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/weeks';

  // tslint:disable-next-line: typedef
  getWeeks(){
    return this.http.get<Week[]>(this.Url);
  }
  // tslint:disable-next-line: typedef
  createWeek(week: Week) {
    return this.http.post<Week>(this.Url, week);
  }
  // tslint:disable-next-line: typedef
  getWeekId(id: number) {
    return this.http.get<Week>(this.Url + '/' + id);
  }
  // tslint:disable-next-line: typedef
  updateWeek(week: Week) {
    return this.http.put<Week>(this.Url + '/' + week.id, week);
  }
}
