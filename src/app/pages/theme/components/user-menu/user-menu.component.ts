import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginService} from '../../../pages/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = 'assets/img/users/dog.jpeg';
  constructor(
      private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  logout() {
      this.loginService.logout();
  }

}
