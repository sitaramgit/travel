import { NgModule } from '@angular/core';  
import { MatButtonModule } from '@angular/material';

const materialComponents=[
  MatButtonModule
]
@NgModule({ 
  imports: [ materialComponents  ],
  exports : [materialComponents]
})
export class SharedModule { }
