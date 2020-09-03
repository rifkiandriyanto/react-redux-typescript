import { createStore } from 'redux';
import { notesReducer } from './NotesReducers';

export const store = createStore(notesReducer);
