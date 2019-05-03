import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {LoginService, StateStorageService} from '../core/index';
import {Settings} from '../../app.settings.model';
import {AppSettings} from '../../app.settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  public username: string;
  public password: string;
  public rememberMe: boolean;
  public authenticationError: boolean;
  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router,
    private loginService: LoginService,
    private stateStorageService: StateStorageService) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      // 'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'rememberMe': false
    });
    stateStorageService.storeUrl('/');
  }

  public onSubmit(values: any): void {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }

  login(values: any) {
    this.settings.loadingSpinner = true;
    this.loginService
      .login({
        username: values.email,
        password: values.password,
        rememberMe: values.rememberMe
      })
      .then(() => {
        this.settings.loadingSpinner = false;
        this.authenticationError = false;
        // this.activeModal.dismiss('login success');
        if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
          this.router.navigate(['']);
        }

        // this.eventManager.broadcast({
        //     name: 'authenticationSuccess',
        //     content: 'Sending Authentication Success'
        // });

        // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // since login is successful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
          this.stateStorageService.storeUrl(null);
          this.router.navigate([redirect]);
        }
      })
      .catch(() => {
        this.settings.loadingSpinner = false;
        this.authenticationError = true;
      });
  }


  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }
}
