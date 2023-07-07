interface IArticle {
  id: number;
  title: String;
  body: String;
}
type Articlestate = {
  articles: IArticle[];
};

type ArticleAction = {
  type: String;
  articles: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
