import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  getAllReports(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/date/expenses');
  }

  getMonthlyReport(year: number, month: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8000/api/date/expenses/${year}/${month}`);
  }

  getMonths(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/expenses/months');
  }
}
