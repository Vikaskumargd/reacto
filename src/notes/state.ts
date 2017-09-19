import { NoteModel } from './types';

export interface NotesState {
    Notes: NoteModel[];
    Loading: boolean;
}