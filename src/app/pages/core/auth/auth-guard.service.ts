import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthServerProvider} from './auth-jwt.service';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      public auth: AuthServerProvider,
      public router: Router
  ) { }

    canActivate(): boolean {
      const jwt = new JwtHelperService();
      const token: string = this.auth.getToken();
      if (!token) {
          this.router.navigate(['login']);
          return false;
      } else if (jwt.isTokenExpired(token)) {
          this.router.navigate(['login']);
          return false;
      } else {
          return true;
      }
    }
}
