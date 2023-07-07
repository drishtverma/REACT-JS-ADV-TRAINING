import * as actionTypes from './actionTypes';
const initialstate: Articlestate = {
  articles: [
    { id: 1, title: 'Demo 1', body: 'Demo Article 1' },
    { id: 2, title: 'Demo 2', body: 'Demo Article 2' },
  ],
};

const reducer = (
  state: Articlestate = initialstate,
  action: ArticleAction
): Articlestate => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: action.articles.id,
        title: action.articles.title,
        body: action.articles.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.DELETE_ARTICLE:
      const deleteArticle: IArticle[] = state.articles.filter(
        (article) => article.id !== action.articles.id
      );
      return {
        ...state,
        articles: deleteArticle,
      };

    default:
      return state;
  }
};
export default reducer;
