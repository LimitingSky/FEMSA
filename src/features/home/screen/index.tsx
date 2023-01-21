import Screen from 'components/Screen';
import React from 'react';
import { FlatList } from 'react-native';
import { ListHeader } from '../components/ListHeader';
import { MovementItem } from '../components/movementItem';
import { useHome } from '../hooks/useHome';
import { HomeScreenStyles } from './style';

const style = HomeScreenStyles;

export const HomeScreen: React.FC = () => {
  const {isLoading, data, total, goToDetail} = useHome();
  const renderItem = ({item}) => (
    <MovementItem {...item} onPress={() => goToDetail(item)} />
  );
  return (
    <Screen>
      <FlatList
        style={style.wrapper}
        ListHeaderComponent={
          <ListHeader amount={total} month="diciembre" userName="Luis Garcia" />
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};
