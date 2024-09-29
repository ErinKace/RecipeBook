import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObvs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObvs = this.authService.login(email, password);
    } else {
      authObvs = this.authService.signup(email,password);
    }

    authObvs.subscribe(resData => {
      console.log(resData);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
    });

    form.reset();
    this.isLoading = false;
  }

}
