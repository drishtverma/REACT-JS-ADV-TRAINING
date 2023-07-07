import { store } from '../store/store';

test('Adds a new article', () => {
  let state = store.getState().articles;
  const initialBookCount = state.length;
  let id = Math.random();
  let data: IArticle = { id: id, title: 'Title', body: 'Body' };
  store.dispatch({ type: 'ADD ARTICLE', articles: data });

  state = store.getState().articles;
  const newlyAddedArticle = state.find((art) => art.id === id);
  console.log(newlyAddedArticle);

  expect(newlyAddedArticle?.body).toBe('Body');
  expect(newlyAddedArticle?.title).toBe('Title');
  expect(state.length).toBeGreaterThan(initialBookCount);
});

test('Deletes a article list with id', () => {
  let state = store.getState().articles;
  const initialBookCount = state.length;
  let data: IArticle = { id: 1, title: 'Demo 1', body: 'Demo Article 1' };

  store.dispatch({
    type: 'DELETE ARTICLE',
    articles: data,
  });
  state = store.getState().articles;
  expect(state.length).toBeLessThan(initialBookCount);
});
