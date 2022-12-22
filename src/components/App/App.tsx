/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { FC } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './styles';


export const App: FC = () => {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  };
