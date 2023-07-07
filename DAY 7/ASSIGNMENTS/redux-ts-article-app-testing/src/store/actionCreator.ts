import * as actionTypes from './actionTypes';

export const addArticle = (articles: any) => {
  const action: any = {
    type: actionTypes.ADD_ARTICLE,
    articles
  };
  return simulateRequest(action);
};

export const removeArticle = (articles: IArticle) => {
  const action: ArticleAction = {
    type: actionTypes.DELETE_ARTICLE,
    articles,
  };
  return simulateRequest(action);
};

const simulateRequest = (action: any) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};
