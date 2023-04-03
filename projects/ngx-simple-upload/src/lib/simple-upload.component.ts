import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ngx-simple-upload',
  templateUrl: './simple-upload.component.html',
  styleUrls: ['./simple-upload.component.scss']
})
export class SimpleUploadComponent {
  @Input() requiredFileType = ''
  @Input() multiple = false
  @Input() btnIcon = 'attach_file'
  @Input() label = 'No file uploaded yet.'
  defaultLabel = ''

  @Output() filesSelected = new EventEmitter<FileList>

  ngOnInit(): void {
    this.defaultLabel = this.label
  }

  private setLabel(files: FileList) {
    this.label = this.defaultLabel

    if (files.length) {
      const fileNames = []
      for (let index = 0; index < files.length; index++) {
        fileNames.push(files.item(index)?.name)
      }
      this.label = fileNames.join(', ')
    }
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files
    this.setLabel(files)

    this.filesSelected.emit(files)
  }
}
