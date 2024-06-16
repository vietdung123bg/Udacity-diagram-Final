import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NoteProviderService } from '../services/note.provider.service';

import { LoadingController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-note-upload',
  templateUrl: './note-upload.component.html',
  styleUrls: ['./note-upload.component.scss'],
})
export class NoteUploadComponent implements OnInit {
  previewDataUrl;
  uploadForm: FormGroup;

  constructor(
    private note: NoteProviderService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      taskName: new FormControl('', Validators.required),
      toDo: new FormControl('', Validators.required)
    });
  }

  onSubmit($event) {
    $event.preventDefault();
    this.loadingController.create();
    this.note.postNote(this.uploadForm.controls.taskName.value, this.uploadForm.controls.toDo.value)
      .then((result) => {
        this.modalController.dismiss();
        this.loadingController.dismiss();
      });
  }

  cancel() {
    this.modalController.dismiss();
  }
}
