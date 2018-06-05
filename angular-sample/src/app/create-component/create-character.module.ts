import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponentComponent } from '../create-component/create-component.component';


@NgModule({
  declarations: [
      CreateComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: CreateComponentComponent}
    ])
  ],
  exports: [
    FormsModule,
    NgForm
  ]
})
export class CreateCharacterModule {

 }
