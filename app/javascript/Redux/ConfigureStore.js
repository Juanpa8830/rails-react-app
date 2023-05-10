import { configureStore } from '@reduxjs/toolkit'; // ya trae la config del combine reducer y del createStore
import MessagesReducer from './MessagesReducer';

const rootReducer = {
  Messages: MessagesReducer,
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
