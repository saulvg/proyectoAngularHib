import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionComponent } from './autenticacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServcicioAutenticacionService } from './servicios/servcicio-autenticacion.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ServcicioAutenticacionService
  ]
})
export class AutenticacionModule { }
