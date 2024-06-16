import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteUploadComponent } from '../note-upload.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-upload-button',
  templateUrl: './note-upload-button.component.html',
  styleUrls: ['./note-upload-button.component.scss'],
})
export class NoteUploadButtonComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  loginSub: Subscription;

  constructor(private modalController: ModalController, private auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUser$.subscribe((user) => {
      this.isLoggedIn = user !== null;
    });
  }

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  async presentUploadForm(ev: any) {
    const modal = await this.modalController.create({
      component: NoteUploadComponent,
    });
    return await modal.present();
  }

}
