import {task} from '../types';
import uuidv4 from 'root/utils/uuidv4';

const {
  NEW,
  REMOVE,
  TOGGLE_COMPLETED,
} = task;

export const addNewTask = (task = '') => ({
  type: NEW,
  payload: {
    id: uuidv4(),
    data: task,
  },
});

export const removeTask = (taskId = '') => ({
  type: REMOVE,
  payload: taskId,
});

export const toggleCompleted = (taskId = '') => ({
  type: TOGGLE_COMPLETED,
  payload: {
    id: taskId,
    timestamp: Number(new Date()),
  },
});