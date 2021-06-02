import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReportInput } from '../Model/reportInput';
import { Report } from '../Model/report';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/reports';

  // tslint:disable-next-line: typedef
  getReports(){
    return this.http.get<Report[]>(this.Url);
  }
  // tslint:disable-next-line: typedef
  createReport(reportInput: ReportInput) {
    return this.http.post<Report>(this.Url, reportInput);
  }
  // tslint:disable-next-line: typedef
  getReportId(id: number) {
    return this.http.get<Report>(this.Url + '/' + id);
  }
  // tslint:disable-next-line: typedef
  updateReport(report: Report) {
    return this.http.put<Report>(this.Url + '/' + report.id, report);
  }
}
