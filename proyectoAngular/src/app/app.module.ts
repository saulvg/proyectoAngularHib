import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginasEstaticas/home/home.component';
import { QuienesSomosComponent } from './paginasEstaticas/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './paginasEstaticas/contactanos/contactanos.component';
import { NotFoundComponent } from './paginasEstaticas/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';

import { ReactiveFormsModule } from '@angular/forms';

// Imports de material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InyectarTokenInterceptor } from './compartido/interceptores/inyectar-token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InyectarTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
