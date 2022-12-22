import axios from 'axios';



export interface FetchOptions<TVariables> {
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  queryString?: Partial<TVariables>;
  url?: string;
  variables?: Partial<TVariables>;
}

export const customFetch = async <TData, TVariables = unknown>(
  path: string,
  {
    method = 'GET',
    queryString,
    variables,
  }: FetchOptions<TVariables> = {},
) => {

  const qs =
    queryString && Object.keys(queryString).length > 0 ? `?${formatQueryString({...queryString, apiKey: '183daca270264bad86fc5b72972fb82a'})}` : '';

    console.log(`https://newsapi.org/v2/${path}${qs}`);
  const response = await axios.request<TData>({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: `https://newsapi.org/v2/${path}${qs}`,
    method,
    ...(variables && { data: variables }),
  });

  return response.data;
};

const formatQueryString = (input: Record<string, unknown>) => {
  return Object.entries(input)
    .map(([key, value]) => `${key}=${JSON.stringify(value)?.replace(/\"/g, '')}`)
    .join('&');
};
