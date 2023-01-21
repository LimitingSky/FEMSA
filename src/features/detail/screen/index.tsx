import { Button } from 'components/button';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Header } from '../components/header';
import { styles } from './styles';

export const DetailScreen: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Header name={'Producto'} />
      <View style={styles.content}>
        <Image style={styles.image} />
        <Text style={styles.subtitle}>Detalles del producto:</Text>
        <Text style={styles.date}>Comprado el 26 de enero, 2019</Text>
        <Text style={styles.subtitle}>Con esta compra acumulaste:</Text>
        <Text style={styles.amount}>100 puntos</Text>
        <Button onPress={() => {}}>Aceptar</Button>
      </View>
    </View>
  );
};
