import React from 'react';
import { NewNoteInput } from './components/NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './redux/NotesReducers';
import { addNote } from './redux/actions';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

const Note = () => {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Note />
    </Provider>
  );
}

export default App;
