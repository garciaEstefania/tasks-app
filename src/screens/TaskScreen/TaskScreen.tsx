import React, {useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import styles from './styles';

import {AddTaskModal} from '~components/AddTaskModal/AddTaskModal';
import {useAppDispatch, useAppSelector} from '~redux/hooks';
import {createTask, Task} from '~redux/slices/taskSlice';
export const TaskScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const tasks = useAppSelector(state => state.tasksReducer.tasks);

  const dispatch = useAppDispatch();

  const renderTask = (item: Task) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskLabel}>{item.description}</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.labelEmptyList}>No tasks added yet</Text>
      </View>
    );
  };
  const onPressAddTask = (task: string) => {
    dispatch(createTask({id: uuidv4(), description: task}));
  };
  return (
    <View style={styles.mainContainer}>
      <AddTaskModal
        isVisible={modalVisible}
        onDismiss={() => setModalVisible(!modalVisible)}
        onPress={onPressAddTask}
      />
      <FlatList
        data={tasks}
        renderItem={({item}) => renderTask(item)}
        ListEmptyComponent={() => renderEmptyList()}
        contentContainerStyle={styles.taskContainer}
      />
      <Pressable onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.labelButton}>Add Task</Text>
      </Pressable>
    </View>
  );
};
