import * as React from 'react';
import { NoteModel } from '../../types';

export interface NoteVarProps {
    Note: NoteModel;
}

export interface NoteEventProps {
    onDelete: () => void;
}

interface Props extends NoteVarProps, NoteEventProps { }

const NoteView = ({ Note, onDelete }: Props): JSX.Element => {

    return (
        <div>
            <p>
                {Note.content}
            </p>
            <time>
                {Note.created}
            </time>
            <button onClick={onDelete} >X</button>
        </div>
    );
};
export default NoteView;