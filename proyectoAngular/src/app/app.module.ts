import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginasEstaticas/home/home.component';
import { QuienesSomosComponent } from './paginasEstaticas/quienes-somos/quienes-somos.component';
import { ContactanosComponent } from './paginasEstaticas/contactanos/contactanos.component';
import { NotFoundComponent } from './paginasEstaticas/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ContactanosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
