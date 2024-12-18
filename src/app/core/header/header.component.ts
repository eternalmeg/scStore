import { Component } from '@angular/core';
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  logoutHandler() : void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login'])
      },
      error: () => {
        this.router.navigate(['/login'])
      }
    })
  }

}
