import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import './App.css';

import rootReducer from './reducer';
import { NoteDetails } from './notes';
import mySaga from './notes/sagas';

import { composeWithDevTools } from 'redux-devtools-extension';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// then run the saga
sagaMiddleware.run(mySaga);
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
