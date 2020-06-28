import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatListModule, MatSnackBarModule, MatGridListModule, MatSelectModule,
    MatCheckboxModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatIconModule, MatAutocompleteModule,
    MatDialogModule, MatFormFieldModule],

  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatSnackBarModule, MatGridListModule, MatSelectModule, MatCheckboxModule,
    MatInputModule, MatProgressSpinnerModule, MatCardModule, MatSidenavModule, MatIconModule, MatAutocompleteModule, MatDialogModule,
    MatFormFieldModule],

})
export class MaterialModule { }
