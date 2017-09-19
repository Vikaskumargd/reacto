import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ThunkAction } from 'redux-thunk';
import * as constants from './constants';
import { NotesState } from './state';
import { NoteModel } from './types';

export interface RequestFetchNotes {
    type: constants.FETCH_NOTES_REQUESTED;
}

export interface FetchNotesSuccess {
    type: constants.FETCH_NOTES_SUCCESS;
    notes: NoteModel[];
}

export interface FetchNotesError {
    type: constants.FETCH_NOTES_ERROR;
    errors: {};
}
export interface DeleteNote {
    type: constants.DELETE_NOTE;
    id: string;
}

export type NotesAction = RequestFetchNotes | FetchNotesSuccess | FetchNotesError;

export function RequestFetchNotes(): RequestFetchNotes {
    return {
        type: constants.FETCH_NOTES_REQUESTED
    };
}

export function FetchNotesSuccess(notes: NoteModel[]): FetchNotesSuccess {
    return {
        type: constants.FETCH_NOTES_SUCCESS,
        notes: notes
    };
}

export function FetchNotesError(errors: {}): FetchNotesError {
    return {
        type: constants.FETCH_NOTES_ERROR,
        errors: errors
    };
}

const deleteNotes: ((id: string) => Promise<NoteModel>) =
    (id: string) => {

        let config: AxiosRequestConfig = {
            method: 'delete',
            url: `http://localhost:9000/notes`
        };
        return Axios.request(config)
            .then((resp: AxiosResponse) => resp.data);
    };

// export const FetchNotesAsync = (): ThunkAction<void, NotesState, void> =>
//     (dispatch) => {
//         dispatch()
//         return getNotes()
//             .then(items => {
//                 dispatch(RequestFetchNotes(items));
//             })
//             .catch((error: {}) => {
//                 // tslint:disable-next-line:no-console
//                 console.log(error);
//             });
//     };
export function DeleteNote(id: string): DeleteNote {
    return {
        type: constants.DELETE_NOTE,
        id
    };
}

export const DeleteNoteAsync = (id: string): ThunkAction<void, NotesState, void> => {
    return (dispatch) => {
        return deleteNotes(id)
            .then(note => dispatch(DeleteNote(id)))
            .catch((error: {}) => alert(error));
    };
};