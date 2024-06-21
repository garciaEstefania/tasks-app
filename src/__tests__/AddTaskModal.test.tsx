import React from 'react';

import {describe, expect, jest, test} from '@jest/globals';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {AddTaskModal} from '../components/AddTaskModal/AddTaskModal';

describe('add task modal test', () => {
  const initialState = {tasks: []};
  const mockStore = configureStore();
  let store;
  test('should add a new task', async () => {
    const mockFn = jest.fn();
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AddTaskModal isVisible={true} onDismiss={jest.fn} onPress={mockFn} />,
      </Provider>,
    );
    const addTaskButton = screen.getByTestId('add_task');
    const taskInput = screen.getByTestId('task_input');

    fireEvent.changeText(taskInput, 'test');
    fireEvent.press(addTaskButton);
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalled();
    });
  });
});

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1),
  };
});
