import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NoteItem } from '../../models/NoteItem.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteItemComponent implements OnInit {
  @Input() noteItem: NoteItem;

  constructor() { }

  ngOnInit() {}
}
