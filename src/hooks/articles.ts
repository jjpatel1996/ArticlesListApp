import { useQuery } from 'react-query';
import { ArticleResponse, Article } from '../types';
import { fetchArticles } from '../client';

export const useArticles = (search?: string) => {

  const fetch = () => {
    return fetchArticles(search || '');
  };

  const { data: articlesResponse, ...rest }  = useQuery<ArticleResponse>('articles', fetch)

  return {
    data: articlesResponse?.articles ?? [],
    ...rest,
  };
};
