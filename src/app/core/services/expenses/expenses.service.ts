import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../../../shared/models/expense/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>('http://localhost:8000/api/expenses', expense);
  }

  getExpensesByMonth(year: number, month: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`http://localhost:8000/api/expenses/${year}/${month}`);
  }

  getExpensesByCategory(categoryId: number): Observable<Expense[]> {
    return this.http.get<Expense[]>(`http://localhost:8000/api/expenses/categories/${categoryId}`);
  }

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:8000/api/expenses');
  }

  deleteExpense(id: number): Observable<Expense> {
    return this.http.delete<Expense>(`http://localhost:8000/api/expenses/${id}`);
  }
}
