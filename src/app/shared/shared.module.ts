import { NgModule } from '@angular/core';  
import { MatButtonModule, MatDialogModule, 
          MatInputModule, MatCheckboxModule, 
          MatSelectModule, MatAutocompleteModule, MatTabsModule } from '@angular/material';

const materialComponents=[
  MatButtonModule, 
  MatDialogModule, 
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule, 
  MatTabsModule,
  MatAutocompleteModule
]
@NgModule({ 
  imports: [ materialComponents  ],
  exports : [materialComponents]
})
export class SharedModule { }
