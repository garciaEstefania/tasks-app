import {beforeEach, describe, expect, test} from '@jest/globals';
import {configureStore, Store} from '@reduxjs/toolkit';

import {createTask, Task, tasksReducer} from '~redux/slices/taskSlice';

describe('TaskSlice test', () => {
  let store: Store;
  beforeEach(() => {
    store = configureStore({reducer: {tasksReducer}});
  });
  test('Should add a new task', () => {
    const newTask: Task = {id: '1', description: 'test'};
    store.dispatch(createTask(newTask));

    expect(store.getState().tasksReducer.tasks).toContainEqual(newTask);
  });
});
