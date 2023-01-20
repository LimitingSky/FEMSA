import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen: React.FC<PropsWithChildren> = props => {
  return <SafeAreaView>{props.children}</SafeAreaView>;
};

export default Screen;
