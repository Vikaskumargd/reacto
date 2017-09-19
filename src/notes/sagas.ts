import { call, put, takeEvery } from 'redux-saga/effects';
import Axios, { AxiosResponse } from 'axios';
import { NoteModel } from './types';
import { RequestFetchNotes, FetchNotesError, FetchNotesSuccess } from './actions';
import { FETCH_NOTES_REQUESTED } from './constants';

const getNotes: (() => Promise<NoteModel[]>) =
    () => {

        return Axios.get('http://localhost:9000/notes')
            .then((resp: AxiosResponse) => resp.data);
    };

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: RequestFetchNotes) {
    try {
        const notes: NoteModel[] = yield call(getNotes);
        yield put(FetchNotesSuccess(notes));
    } catch (e) {
        yield put(FetchNotesError(e));
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(FETCH_NOTES_REQUESTED, fetchUser);
}

export default mySaga;