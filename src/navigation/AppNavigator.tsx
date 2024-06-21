import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';

import {HomeScreen} from '~screens/HomeScreen/HomeScreen';
import {ListScreen} from '~screens/ListScreen/ListScreen';
import {TaskScreen} from '~screens/TaskScreen/TaskScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'Tasks'} component={TaskScreen} />
      <Stack.Screen name={'List'} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
