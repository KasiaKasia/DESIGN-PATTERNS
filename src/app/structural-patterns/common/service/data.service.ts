import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/text-data';

  constructor(private http: HttpClient) {}

  getTextData(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
