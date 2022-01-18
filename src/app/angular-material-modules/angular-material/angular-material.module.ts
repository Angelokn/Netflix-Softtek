import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatError, MatFormFieldModule, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatLabel,
    MatError,
  ],
  providers: [
  ]
})
export class AngularMaterialModule { }
