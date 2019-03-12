import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatMenuModule,
  MatRippleModule,
  MatGridListModule,
  MatSidenavModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatTabsModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDialogModule,
  MatDividerModule,
  MatMenuModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSliderModule,
  MatTabsModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ]
})
export class SharedModule { }
