import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {AppMatchPasswordsDirective} from "./directives/app-match-passwords.directive";
import {ErrorMessageComponent} from "./error-message/error-message.component";


@NgModule({
  declarations: [
    LoaderComponent,
    AppMatchPasswordsDirective,
    ErrorMessageComponent

  ],
  exports: [
    AppMatchPasswordsDirective,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
