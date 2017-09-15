import * as React from 'react';
import './Hello.css';

export interface VarProps {
  name: string;
  enthusiasmLevel?: number;
}

export interface EventProps {

  onIncrement?: () => void;
  onDecrement?: () => void;
}

type Props = VarProps & EventProps;

function Hello({ name, enthusiasmLevel = 1, onDecrement, onIncrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement} className="decrement-button" > - </button>
        <button onClick={onIncrement} className="increment-button" > + </button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}