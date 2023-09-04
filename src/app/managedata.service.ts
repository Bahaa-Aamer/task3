import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagedataService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(
      'https://backend-dev.ke.boyot.app/api/users/login',
      data
    );
  }
}
