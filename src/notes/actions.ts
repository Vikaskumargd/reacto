import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ThunkAction } from 'redux-thunk';

import * as constants from './constants';
import { NotesState } from './state';
import { NoteModel } from './types';

export interface FetchNotes {
    type: constants.FETCH_NOTES;
    notes: NoteModel[];
}
export interface DeleteNote {
    type: constants.DELETE_NOTE;
    id: string;
}

// type ThunkAction2<R> = ThunkAction<R, NotesState, void>;
// export type ThunkActionCreator<R> = (...args: {}[]) => ThunkAction<R, NotesState, void>;
export type NotesAction = FetchNotes | DeleteNote;

export function FetchNotes(notes: NoteModel[]): FetchNotes {
    return {
        type: constants.FETCH_NOTES,
        notes: notes
    };
}

const getNotes: (() => Promise<NoteModel[]>) =
    () => {

        return Axios.get('http://localhost:9000/notes')
            .then((resp: AxiosResponse) => resp.data);
    };

const deleteNotes: ((id: string) => Promise<NoteModel>) =
    (id: string) => {

        let config: AxiosRequestConfig = {
            method: 'delete',
            url: `http://localhost:9000/notes`
        };
        return Axios.request(config)
            .then((resp: AxiosResponse) => resp.data);
    };

export const FetchNotesAsync = (): ThunkAction<void, NotesState, void> =>
    (dispatch) => {
       
        return getNotes()
            .then(items => {
                dispatch(FetchNotes(items));
            })
            .catch((error: {}) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });
    };
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