import { NgModule } from '@angular/core';
import { SimpleUploadComponent } from './simple-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    SimpleUploadComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SimpleUploadComponent
  ]
})
export class SimpleUploadModule { }
