import { combineReducers } from 'redux';
import { NotesReducer, NotesState } from './notes';

export interface AppState {
    noteList: NotesState;
}

export default combineReducers<AppState>({
    noteList: NotesReducer
});