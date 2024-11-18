import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {UserModule} from "./user/user.module";
import {CatalogModule} from "./catalog/catalog.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    UserModule,
    HttpClientModule,
    CatalogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
