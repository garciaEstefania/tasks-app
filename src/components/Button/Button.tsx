import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

interface Props {
  label: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({label, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};
