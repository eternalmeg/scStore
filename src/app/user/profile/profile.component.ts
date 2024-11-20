import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {User} from "../../types/user";
import {Device} from "../../types/device";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user: User | undefined;
  devices: Device[] | undefined;
  showEditMode = false;
  isUpdating = false;



constructor(private userService: UserService, private router: Router) {
}

get name(): string {
  return this.userService.user?.name || '';
}

  ngOnInit(): void {
  this.userService.getProfile().subscribe((user) => {
    this.user = user;
    this.devices = user.createdDevice;
  })
  }


  onToggle():void {
    this.showEditMode = !this.showEditMode;
  }

  submitHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isUpdating = true; // Показваме индикатора
    const { name, phone } = form.value;

    this.userService.updateProfile(name, phone).subscribe(() => {
      this.userService.getProfile().subscribe((user) => {
        this.user = user;
        this.devices = user.createdDevice;
        this.onToggle();
        this.isUpdating = false; // Скриваме индикатора
      });
    });
  }


}
