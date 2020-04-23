import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  createCategory(name: string, icon: string): Observable<any> {
    return this.http.post<Category>('http://localhost:8000/api/categories', { name, icon });
  }

  getCategories(): Observable<any> {
    return this.http.get<Category[]>('http://localhost:8000/api/categories');
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:8000/api/categories/${id}`);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete(`http://localhost:8000/api/categories/${id}`);
  }
}
