import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN_KEY } from '../constants/token.consts';
import { ModulePath } from '../enums/routing-path.enums';
import { IAuthResponseData } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  logIn(authResponseData: IAuthResponseData) {
    localStorage.setItem(TOKEN_KEY, authResponseData.token);
    this.router.navigate([ModulePath.CoreFullPath]);
  }

  get isUserHasAccess(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }
}
