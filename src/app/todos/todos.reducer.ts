import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { create, edit, toggle, remove, toggleAll, clearCompleted } from "./todo.actions";


export const initialState: Todo[] = [
  new Todo ('Hello'),
  new Todo ('Hello 1'),
  new Todo ('Hello 2'),
  new Todo ('Hello 3'),
];

const _todosReducer = createReducer(
  initialState,
  on(create, (state, { title }) => [...state, new Todo (title)]),
  on(toggle, (state, { id }) => {
    return state.map((todo)=> {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      else{
        return todo;
      }
    })
  }),
  on(edit, (state, { id, title }) => {
    return state.map((todo)=> {
      if(todo.id === id){
        return {
          ...todo,
          title: title,
        }
      }
      else{
        return todo;
      }
    })
  }),
  on(remove, (state, { id }) => state.filter((todo)=> todo.id !== id)),
  on ( toggleAll, ( state, {completed} ) => state.map( todo => {
    return {
      ...todo,
      completed: completed
    }
  })),
  on(clearCompleted, (state) => state.filter((todo)=> !todo.completed)),
);

export function todosReducer(state: any, action: Action) {
  return _todosReducer(state, action);
}
