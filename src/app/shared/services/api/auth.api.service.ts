import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogInData } from '../../interfaces/login-data.interface';
import { IAuthResponseData } from '../../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  getToken(logInData: ILogInData): Observable<IAuthResponseData> {
    return this.http.post<IAuthResponseData>(
      'api/auth/token/login/',
      logInData
    );
  }
}
