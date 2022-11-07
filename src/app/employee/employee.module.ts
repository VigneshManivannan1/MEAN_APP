import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListviewComponent } from './listview/listview.component';
import { LayoutviewComponent } from './layoutview/layoutview.component';
import { AddeditviewComponent } from './addeditview/addeditview.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListviewComponent,
    LayoutviewComponent,
    AddeditviewComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
