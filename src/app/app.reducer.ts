import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Todo } from "./todos/models/todo.model";
import { filterReducer } from "./filter/filter.reducer";
import { todosReducer } from "./todos/todos.reducer";

export interface AppState {
  todos: Todo[],
  filter: any,
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todosReducer,
  filter: filterReducer
}
