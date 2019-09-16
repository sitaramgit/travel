import { NgModule } from '@angular/core';  
import { MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

const materialComponents=[
  MatButtonModule, MatDialogModule, MatInputModule
]
@NgModule({ 
  imports: [ materialComponents  ],
  exports : [materialComponents]
})
export class SharedModule { }
