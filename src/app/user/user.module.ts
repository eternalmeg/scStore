import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {OfferComponent} from './offer/offer.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { CreateOfferComponent } from './create-offer/create-offer.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    OfferComponent,
    ProfileComponent,
    CreateOfferComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    OfferComponent,
    ProfileComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class UserModule {
}
