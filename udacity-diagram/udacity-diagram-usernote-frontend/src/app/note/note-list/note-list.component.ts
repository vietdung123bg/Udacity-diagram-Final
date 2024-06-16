import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NoteItem } from '../../models/NoteItem.model';
import { NoteProviderService } from '../services/note.provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit, OnDestroy {
  @Input() noteItems: NoteItem[];
  subscriptions: Subscription[] = [];
  constructor( private note: NoteProviderService ) { }

  async ngOnInit() {
    this.subscriptions.push(
      this.note.currentNote.subscribe((items) => {
      this.noteItems = items;
    }));

    await this.note.getNote();
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
