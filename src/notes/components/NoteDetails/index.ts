
import { connect } from 'react-redux';
import NotesList, { NoteListVarProps, NoteListEventProps } from '../NotesList';
import { RequestFetchNotes, DeleteNoteAsync } from '../../actions';
import { AppState } from '../../../reducer';

const mapStateToProps = ({ noteList }: AppState): NoteListVarProps => {
    return {
        Notes: noteList.Notes,
        Loading: noteList.Loading
    };
};

const mapDispatchToProps = (dispatch: Function): NoteListEventProps => {
    return {
        OnNotesListMounting: () => dispatch(RequestFetchNotes()),
        OnDeleteNote: (id: string) => dispatch(DeleteNoteAsync(id))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);