import * as React from 'react';
import NoteView from '../Notes';
import { NoteModel } from '../../types';

export interface NoteListVarProps {
    Notes: NoteModel[];
    Loading: boolean;
}

export interface NoteListEventProps {
    OnNotesListMounting: () => void;
    OnDeleteNote: (id: string) => void;
}

type Props = NoteListVarProps & NoteListEventProps;

class NotesList extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }
    componentWillMount() {
        this.props.OnNotesListMounting();
    }

    render(): JSX.Element {
        return (
            !this.props.Loading ?
                (
                    <div>
                        {
                            this.props.Notes.map((note) => (
                                <NoteView
                                    key={note.id}
                                    Note={note}
                                    onDelete={() => { this.props.OnDeleteNote(note.id); }}
                                />
                            ))
                        }
                    </div>
                ) :
                <p>Loading...</p>
        );

    }
}

export default NotesList;