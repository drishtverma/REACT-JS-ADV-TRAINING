import { configureStore } from '@reduxjs/toolkit';
import { notesActions } from './action';

export default configureStore({
  reducer: { notes: notesActions },
});
