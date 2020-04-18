import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_service/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptorProvider } from './_service/error.interceptor';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NavComponent, RegisterComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    SplitButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    { provide: Router, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
