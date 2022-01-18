import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators'
import { User } from 'src/app/shared/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlMock = 'http://localhost:3000'

  private userAuth: boolean = false;

  // constructor(private http: HttpClient) { }
  constructor(private router: Router, private http: HttpClient) { }


  // isLoggedIn() {
  //   return of(true).pipe(delay(500));
  // }

  // hasPermissions() {
  //   return of(true);
  // }

  // isAuthenticated() {
  //   return this.http.get('/auth/isAuthenticated');
  // }

  fazerLogin() {
    return this.http.get(`${this.urlMock}/usuarios`)
  }

  // fazerLogin(user: User) {
  //   if (user.email === "joao@gmail.com" && user.senha === "12345" ||
  //       user.email === "angelo@gmail.com" && user.senha === "54321" ||
  //       user.email === "ana@gmail.com" && user.senha === "00000" ||
  //       user.email === "julia@gmail.com" && user.senha === "88888" ||
  //       user.email === "pedro@gmail.com" && user.senha === "55555"
  //   ) {
  //     this.userAuth = true;
  //     this.router.navigate(['/login/home'])
  //   } else {
  //     this.userAuth = false;
  //     alert("Dados inválidos.");
  // }
  // }

  validLogin() {
    return this.userAuth;
  }
}
