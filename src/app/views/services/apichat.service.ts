import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApichatService {

   private readonly API_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  askQuestion(question: string): Observable<any> {
    return this.http.post(`${this.API_URL}/api/ask`, { question });
  }
}
