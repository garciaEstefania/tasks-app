import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import {Button} from '~components/Button/Button';
import {RootStackScreenProps} from '~navigation/types';

export const HomeScreen = ({navigation}: RootStackScreenProps<'Home'>) => {
  return (
    <View style={styles.mainContainer}>
      <Button label="Tasks" onPress={() => navigation.navigate('Tasks')} />
      <Button label="List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};
