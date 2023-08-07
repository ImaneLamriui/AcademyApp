import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { loginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  
  constructor(private loginService: loginService) {
    // this.modulos= this.moduloservice.modulos;
  }
  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyDni82FjNrMmsla43LDm0o9qXXTIyeGtHk",
    authDomain: "academia-bf787.firebaseapp.com",
   })
  }
  estaLogueado(){
    return this.loginService.estaLogueado()
  }
  logout() {
    this.loginService.logout();
  }
 
}
