import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Task {
  id: string;
  description: string;
}

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'tasksReducer',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const {createTask} = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
