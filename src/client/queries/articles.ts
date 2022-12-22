import { FetchArticlesVariables, Article } from '../../types';
import { customFetch } from '../../utils/client';


export const fetchArticles = (search: String) => {
  return customFetch<Array<Article>, FetchArticlesVariables>('everything', {
    queryString: {
      search
    },
  });
};
