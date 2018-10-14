type Common = {
  id: string,
  createdAt: number;
}

type Article = Common & {
  title: string,
  content: string
}

type MyExclude<T, U> = T extends U ? never : T;
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type ExcludeType<F, P> = MyPick<F, MyExclude<keyof F, keyof P>>

type PartialArticle = ExcludeType<Article, Common>

const partialArticle: PartialArticle = {
  id: 'id',
  title: 'hello',
  content: 'typescript',
};
