import { LoginPageComponent } from './page/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { FormSesionComponent } from './components/form-sesion/form-sesion.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    FormSesionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
