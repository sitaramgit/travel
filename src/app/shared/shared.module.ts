import { NgModule } from '@angular/core';  
import { MatButtonModule, MatDialogModule, 
          MatInputModule, MatCheckboxModule, 
          MatSelectModule, MatAutocompleteModule } from '@angular/material';

const materialComponents=[
  MatButtonModule, 
  MatDialogModule, 
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule, 
  MatAutocompleteModule
]
@NgModule({ 
  imports: [ materialComponents  ],
  exports : [materialComponents]
})
export class SharedModule { }
