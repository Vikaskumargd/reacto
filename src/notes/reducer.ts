import { NotesAction } from './actions';
import { FETCH_NOTES_REQUESTED, FETCH_NOTES_SUCCESS, FETCH_NOTES_ERROR } from './constants';
import { NotesState } from './state';
// import { NoteModel } from './types';

const initialState: NotesState = {
    Loading: false,
    Notes: []
};

export function NotesReducer(state: NotesState = initialState, action: NotesAction): NotesState {
    switch (action.type) {
        case FETCH_NOTES_REQUESTED:
            return { ...state, Loading: true };
        case FETCH_NOTES_SUCCESS:
            return { ...state, Notes: action.notes, Loading: false };

        case FETCH_NOTES_ERROR:
            return { ...state, Notes: [], Loading: false };
        // case DELETE_NOTE:
        //     let notesAfterDelete: NoteModel[] = state.Notes.filter((note) => {
        //         return note.id !== action.id;
        //     });
        //     return { ...state, Notes: notesAfterDelete };

        default:
            return state;

    }
}