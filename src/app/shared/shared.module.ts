import { NgModule } from '@angular/core';  
import { MatButtonModule, MatDialogModule, MatInputModule, MatCheckboxModule } from '@angular/material';

const materialComponents=[
  MatButtonModule, MatDialogModule, MatInputModule,MatCheckboxModule
]
@NgModule({ 
  imports: [ materialComponents  ],
  exports : [materialComponents]
})
export class SharedModule { }
