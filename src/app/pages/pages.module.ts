import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule} from './pages-routing.module';
import { FormsModule }   from '@angular/forms';
import { PagesComponent } from './pages.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ThemeModule} from '../@theme/theme.module';
// import {ThemeModule} from '@theme/theme.module';
@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    MatCheckboxModule,
    ThemeModule
  ]
})
export class PagesModule { }
