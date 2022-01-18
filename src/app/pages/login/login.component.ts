import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/shared/user/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // formUser: FormGroup | undefined;

  login!: FormGroup;

  msg!: string;

  private userAuth: boolean = false;

  user: User = new User();

  private formBuilder!: FormBuilder;

  chave: boolean = false;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService: AuthService,
    private authGuard: AuthGuard,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.createForm(new User());
    this.login = this.fb.group({
      email:["", Validators.required],
      senha:["", Validators.required]
    })
  }

  // createForm(user: User) {
  //   this.formUser = new FormGroup({
  //     emai: new FormControl(user.email),
  //     senha: new FormControl(user.senha),
  //   })
  // }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

//   loginSubmit() {
//     this.authService.fazerLogin(this.user);
// }

loginSubmit(): void {
  this.authService.fazerLogin().subscribe((data: any) => {
    for (let element of data) {
      if (element.email == this.login.controls['email'].value &&
        element.senha == this.login.controls['senha'].value) {
        this.authGuard.isAuthenticated = true;
        localStorage.setItem('userLogged', JSON.stringify(element))
        this.router.navigate(['/login/home']);
        this._snackBar.open('Login efetuado com sucesso!');
        break;
      }
      else {
        this._snackBar.open('Usuário inválido');
        this.user.email = "";
        this.user.senha = "";
      }
    }
  })
}



}
