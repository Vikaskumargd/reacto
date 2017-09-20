// prev: import React from 'react';
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Note from '../src/notes/components/Notes';
import { NoteModel } from './notes/types';

// prev: import { Button, Welcome } from '@storybook/react/demo';
const { Button, Welcome } = require('@storybook/react/demo');

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const note: NoteModel = {
  content: 'ASdsad',
  created: new Date(123),
  id: '1123'
};
storiesOf('Button', module)
  .add('with text OF vIKAS', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('note ', () => <Note Note={note} onDelete={action('clicked')} />);
