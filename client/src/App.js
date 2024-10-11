import React from 'react'
import './App.css';
import store from './store/store';
import { Provider } from "react-redux";
import TodoComponent from './todocomponent/todoComponentApp/TodoComponent';
function App() {
  return (
    <Provider store={store}>
      <TodoComponent/>
    </Provider>
  );
}

export default App;
