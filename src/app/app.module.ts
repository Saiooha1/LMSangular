import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './services/admin.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminmodelComponent } from './adminmodel/adminmodel.component';
import { LmscourseComponent } from './lmscourse/lmscourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { SearchcourseComponent } from './searchcourse/searchcourse.component';
import { UsermodelComponent } from './usermodel/usermodel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminmodelComponent,
    LmscourseComponent,
    AddcourseComponent,
    SearchcourseComponent,
    UsermodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
