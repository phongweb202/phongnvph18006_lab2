import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
// import thanh phan form
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // dua vao de cac component con co the sd
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

