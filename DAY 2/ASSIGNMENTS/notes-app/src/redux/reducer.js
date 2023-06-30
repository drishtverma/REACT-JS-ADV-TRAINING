const initialState = {
  notesList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTES': {
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };
    }
    case 'DELETE_NOTES': {
      const oldList = [...state.notesList];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        notesList: newList,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
