
import { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import {
  Text,
  SafeAreaView,
  View
} from 'react-native';
import { styles } from './styles';
import { useArticles } from '../../hooks'
import { Article } from '../../types'

export const ArticlesListScreen: FC = () => {

  const [search, setSearch] = useState('bitcoin');

  const { data, isLoading, error } = useArticles(search)

  useEffect(() => {
    console.log(data.length, isLoading, error);
  }, [data, isLoading, error])

  const renderItem = ({ item }: { item: Article }) => {
    return (<View> 
      <Text style={styles.item}>{item.title}</Text>
      <Text style={styles.item}>{item.description}</Text>
    </View>)
  };

  if(isLoading) return <Text> Loading </Text>
  if(error) return <Text> Something went wrong </Text>
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={() => {
            return null;
          }}
    />
      </SafeAreaView>
    );
  };
