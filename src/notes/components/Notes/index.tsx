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
                <button onClick={onDelete} >X</button>
            </p>
            
           
        </div>
    );
};
export default NoteView;