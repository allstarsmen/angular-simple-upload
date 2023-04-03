import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { SimpleUploadFileComponent } from './simple-upload.component';


@NgModule({
  declarations: [
    SimpleUploadFileComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SimpleUploadFileComponent
  ]
})
export class SimpleUploadFileModule { }
