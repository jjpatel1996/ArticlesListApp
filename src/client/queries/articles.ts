import { FetchArticlesVariables, ArticleResponse } from '../../types';
import { customFetch } from '../../utils/client';


export const fetchArticles = (search: String) => {
  return customFetch<ArticleResponse, FetchArticlesVariables>('everything', {
    queryString: {
      'q': search
    },
  });
};
