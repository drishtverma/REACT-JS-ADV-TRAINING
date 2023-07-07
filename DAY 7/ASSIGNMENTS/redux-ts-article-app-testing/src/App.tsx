import React from 'react';
import './App.css';

//add impoorts
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AddArticle } from './components/AddArticle';
import { Article } from './components/Article';
import { addArticle, removeArticle } from './store/actionCreator';

const App: React.FC = () => {
  const articles: IArticle[] = useSelector(
    (state: Articlestate) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>MyArticles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;
