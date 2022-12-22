/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { FC} from 'react';
import {
  View,
} from 'react-native';
import { styles } from './styles';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ArticlesListScreen } from '../../screens'
const queryClient = new QueryClient()

export const App: FC = () => {
    return (
      <QueryClientProvider client={queryClient}>
       <View style={styles.container}>  
        <ArticlesListScreen></ArticlesListScreen>
      </View>
     </QueryClientProvider>
    );
  };
