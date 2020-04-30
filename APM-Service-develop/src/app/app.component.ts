import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './_services';
import {Role, User} from './_models';
import {SidebarService} from './components/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;
  menus: [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    public sidebarservice: SidebarService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  getSideBarState() {
    return this.sidebarservice.getToggleData();
  }
  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          currentMenu.active = false
        }
      });
    }
  }


}
