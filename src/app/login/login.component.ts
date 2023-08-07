import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { loginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})

export class LoginComponent implements OnInit {
constructor(private loginService:loginService) {}
  ngOnInit(): void {
  }
  login(Form: NgForm): void{
    const email = Form.value.email;
    const password = Form.value.password;
    this.loginService.login(email, password);
  }
}
