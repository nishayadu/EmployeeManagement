import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { EmployeeDataService } from './employee-data.service';
import { FilterPipe } from './filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { HighlightDirective } from './highlight.directive';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes:Routes=[
  {path:'',pathMatch:'full',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee-edit/:id',component:EmployeeEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeListComponent,
    FilterPipe,
    HighlightDirective,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    OrderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
