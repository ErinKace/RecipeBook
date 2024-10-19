import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/Alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective) alertHost!: PlaceholderDirective;

  private closeSub!: Subscription;

  constructor(private authService: AuthService, private router: Router, private comFactory: ComponentFactoryResolver) { }

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
      this.router.navigate(['/recipes']);
    }, errorMessage => {
      console.log(errorMessage);
      this.showErrorAlert(errorMessage);
    });

    form.reset();
    this.isLoading = false;
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(errorMsg: string | null) {
    this.error = errorMsg;
    const alertComFactory = this.comFactory.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComFactory);
    
    componentRef.instance.message = "Your credientials aren't correct."
    this.closeSub = componentRef.instance.close.subscribe(()=> {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })


  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
