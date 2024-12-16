import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    CartComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
