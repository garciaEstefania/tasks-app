import React, {useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';

import styles from './styles';

interface Props {
  isVisible: boolean;
  onDismiss: () => void;
  onPress: (task: string) => void;
}

export const AddTaskModal: React.FC<Props> = ({
  isVisible,
  onDismiss,
  onPress,
}) => {
  const [taskDescription, setTaskDescription] = useState<string>('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onDismiss}
      onDismiss={onDismiss}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Add Task</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              testID="task_input"
              placeholder="Tap something..."
              placeholderTextColor={'#000'}
              maxLength={50}
              autoCapitalize="sentences"
              value={taskDescription}
              onChangeText={value => setTaskDescription(value)}
              style={styles.taskTextInput}
            />
          </View>
          <Pressable
            testID="add_task"
            onPress={() => {
              onPress(taskDescription);
              onDismiss();
              setTaskDescription('');
            }}
            disabled={!taskDescription}
            style={styles.saveButton}>
            <Text style={styles.labelButton}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
