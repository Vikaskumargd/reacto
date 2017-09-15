import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './App.css';

import rootReducer from './reducer';
import { NoteDetails } from './notes';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component<{}, {}> {
  render() {
    return (

      <Provider store={store}>
        <NoteDetails />
      </Provider>

    );
  }
}

export default App;
