import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(`${environment.apiBaseUrl}/cats`);
  }

  getById(id: number): Observable<Cat> {
    return this.httpClient.get<Cat>(`${environment.apiBaseUrl}/cats/${id}`);
  }

  create(cat: Cat): Observable<Cat> {
    return this.httpClient.post<Cat>(`${environment.apiBaseUrl}/cats`, cat);
  }

  update(cat: Cat): Observable<Cat> {
    return this.httpClient.put<Cat>(`${environment.apiBaseUrl}/cats`, cat);
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.apiBaseUrl}/cats/${id}`)
  }
    
}
