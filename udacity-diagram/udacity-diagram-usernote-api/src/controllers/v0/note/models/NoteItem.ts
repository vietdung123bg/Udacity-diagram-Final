import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';


@Table
export class NoteItem extends Model<NoteItem> {

  @Column
  public taskName!: string;

  @Column
  public toDo!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
