import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { forbiddenNameValidator, ForbiddenValiditorDirective } from '../@theme/directive/forbidden-validitor.directive';



@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ThemeModule
  ]
})
export class AuthModule { }
