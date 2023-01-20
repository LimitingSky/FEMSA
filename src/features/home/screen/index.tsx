import Screen from 'components/Screen';
import React from 'react';
import { FlatList } from 'react-native';
import { ListHeader } from '../components/ListHeader';
import { MovementItem } from '../components/movementItem';
import { HomeScreenStyles } from './style';

const style = HomeScreenStyles;

export const HomeScreen: React.FC = () => {
  return (
    <Screen>
      <FlatList
        style={style.wrapper}
        ListHeaderComponent={
          <ListHeader amount={1000} month="diciembre" userName="Luis Garcia" />
        }
        data={[]}
        renderItem={() => <MovementItem />}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};
