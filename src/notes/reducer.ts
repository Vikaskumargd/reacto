import { NotesAction } from './actions';
import { FETCH_NOTES, DELETE_NOTE } from './constants';
import { NotesState } from './state';
import { NoteModel } from './types';

export function NotesReducer(state: NotesState = { Notes: [] }, action: NotesAction): NotesState {
    switch (action.type) {
        case FETCH_NOTES:
            return { ...state, Notes: action.notes };
        case DELETE_NOTE:
            let notesAfterDelete: NoteModel[] = state.Notes.filter((note) => {
                return note.id !== action.id;
            });
            return { ...state, Notes: notesAfterDelete };

        default:
            return state;

    }
}