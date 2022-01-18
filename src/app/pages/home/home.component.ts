import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public userLogged: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userLogged = JSON.parse(localStorage.getItem('userLogged') as string);
  }

  goToLogin(){
    this.router.navigate(['login'])
  }
}