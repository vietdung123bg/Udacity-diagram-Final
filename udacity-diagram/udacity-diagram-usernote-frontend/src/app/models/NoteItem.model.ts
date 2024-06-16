export interface NoteItem {
    id: number;
    taskName: string;
    toDo: string;
}

export const noteItemMocks: NoteItem[] = [
    {
        id: 0,
        taskName: 'Day 1',
        toDo: "toDo 1"
    },
    {
        id: 1,
        taskName: 'Day 2',
        toDo: "toDo 2",
    },
    {
        id: 2,
        taskName: 'Day 3',
        toDo: "toDo 3"
    }
];
