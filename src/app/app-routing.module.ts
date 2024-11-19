import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {CreateOfferComponent} from "./user/create-offer/create-offer.component";
import {OfferComponent} from "./user/offer/offer.component";
import {CatalogComponent} from "./catalog/catalog/catalog.component";
import {DetailsComponent} from "./catalog/details/details.component";
import {ErrorPageComponent} from "./shared/error-page/error-page.component";

const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-profile', component: ProfileComponent},
  {path: 'create-offer', component: OfferComponent},
  {path: 'edit-offer/:id', component: CreateOfferComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'device-details/:id', component: DetailsComponent},
  {path: '404', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
