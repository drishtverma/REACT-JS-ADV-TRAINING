import { action } from 'typesafe-actions';
export const notesActions = {
  add: (list) => action('ADD_NOTES', list),
  delete: (id) => action('DELETE_NOTES', id),
};
