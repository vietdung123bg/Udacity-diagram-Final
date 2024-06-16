import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteUploadComponent } from './note-upload/note-upload.component';
import { NoteUploadButtonComponent } from './note-upload/note-upload-button/note-upload-button.component';

import { NoteProviderService } from './services/note.provider.service';

const entryComponents = [NoteUploadComponent];
const components = [NoteListComponent, NoteItemComponent, NoteUploadComponent, NoteUploadButtonComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components,
  entryComponents: entryComponents,
  providers: [NoteProviderService]
})
export class NoteModule {}
