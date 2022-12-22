import axios from 'axios';

import { environment } from '../config';


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
    endpoint = 'jsonapi',
    method = 'GET',
    queryString,
    variables,
    url = `${environment.base_url}/${endpoint}`,
  }: FetchOptions<TVariables> = {},
) => {

  const qs =
    queryString && Object.keys(queryString).length > 0 ? `?${formatQueryString({...queryString, apiKey: environment.api_key})}` : '';

  const response = await axios.request<TData>({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    url: `${url}/${path}${qs}`,
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
