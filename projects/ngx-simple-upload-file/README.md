# Angular Simple Upload File

An angular module for file uploads. A simple skeleton that you can easily add to, no extra features, just easy to style upload button.

## Installation
Install Angular Material UI

    ng add @angular/material

Install the library:

    npm install ngx-simple-upload

## Usage
### In your module:

    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { SimpleUploadFileModule } from '@nampham/ngx-simple-upload-file';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SimpleUploadFileModule, <<< Import the module
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

### In your component HTML file:

    <ngx-simple-upload-file (filesSelected)="onFilesSelected($event)"></ngx-simple-upload-file>

## Inputs:

| Input   | Default value      |  Value type | Description |
|---------|--------------------|-------------| ----------- |
| requiredFileType | '' | String | Exact same as [HTML \<input> accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp) |
| multiple |    false   |   Boolean | If 'true', allow to select multiple files.|
| btnIcon | 'attach_file' |    String | [Angular Material icons](https://fonts.google.com/icons?icon.query=attach) |
| label | 'No file uploaded yet.' |    String | Custom label |

## Events: 

| Event   | Description      |  Return |
|----------|:-------------:|------:|
| (filesSelected) | Occurs when the files are changed.  | [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) |