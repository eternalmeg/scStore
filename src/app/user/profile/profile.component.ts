import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
constructor(private userService: UserService, private router: Router) {
}

get name(): string {
  return this.userService.user?.name || '';
}

}
