import {task} from '../types';

const {
  NEW,
  REMOVE,
  TOGGLE_COMPLETED,
} = task;

const initState = {
  // Holds objects with tasks and taskId.
  list: [],
  // Holds taskId and time when was completed.
  completed: {},
};

export default function(state = initState, {type, payload}) {
  switch (type) {
    case NEW:
      // payload === object that holds taskId & task.
      return ({
        ...state,
        list: [...state.list, payload],
      });

    case REMOVE:
      // payload === taskId.
      const removeFromList = () => state.list.filter(({id}) => id !== payload);

      const removeFromCompleted = () => {
        const completed = {...state.completed};
        completed[payload] && delete completed[payload];
        return completed;
      };

      return ({
        ...state,
        list: removeFromList(),
        completed: removeFromCompleted(),
      });

    case TOGGLE_COMPLETED:
      // payload === object that holds taskId & timestamp completed.
      const toggleCompleted = () => {
        const completed = {...state.completed};
        // Is task completed?
        completed[payload.id]
            // Delete this task from list of completed.
            ? delete completed[payload.id]
            // Else set this task into completed list.
            : completed[payload.id] = payload;

        return completed;
      };

      return ({
        ...state,
        completed: toggleCompleted(),
      });

    default:
      return state;
  }
}