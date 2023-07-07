import * as React from 'react';

//define props
type Props = {
  saveArticle: (article: IArticle | any) => void;
};

//define addArticle component
export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  //article variable
  const [article, setArticle] = React.useState<IArticle | {}>();

  //onsubmit code
  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  //onchange of the textbox
  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: [e.currentTarget.value],
    });
  };

  return (
    <form onSubmit={addNewArticle}>
      <input
        type='text'
        id='title'
        placeholder='Title'
        onChange={handleArticleData}
      />
      <input
        type='text'
        id='body'
        placeholder='Body'
        onChange={handleArticleData}
      />
      <button>Add Article</button>
    </form>
  );
};
