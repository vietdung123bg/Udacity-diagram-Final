import { Injectable } from '@angular/core';
import { NoteItem, noteItemMocks } from '../../models/NoteItem.model';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class NoteProviderService {
  currentNote: BehaviorSubject<NoteItem[]> = new BehaviorSubject<NoteItem[]>([]);

  constructor(private api: ApiService) { }

  async getNote(): Promise<BehaviorSubject<NoteItem[]>> {
    const req = await this.api.get('/note');
    const items = <NoteItem[]> req.rows;
    this.currentNote.next(items);
    return Promise.resolve(this.currentNote);
  }

  async postNote(taskName: string, toDo: string): Promise<any> {
    const res = await this.api.post('/note', {taskName: taskName, toDo: toDo});
    return res;
  }

}