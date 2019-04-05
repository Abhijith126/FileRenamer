import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatCheckboxModule,
  MatSidenavModule, MatIconModule, MatListModule, MatSnackBarModule, MatGridListModule, MatAutocompleteModule, MatDialogModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatListModule, MatSnackBarModule, MatGridListModule, MatSelectModule,
    MatCheckboxModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatIconModule, MatAutocompleteModule,
    MatDialogModule, MatFormFieldModule],

  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatSnackBarModule, MatGridListModule, MatSelectModule, MatCheckboxModule,
    MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatIconModule, MatAutocompleteModule, MatDialogModule,
    MatFormFieldModule],

})
export class MaterialModule { }
