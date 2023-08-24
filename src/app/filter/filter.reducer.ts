import { Action, createReducer, on } from "@ngrx/store";
import { filtrosValidos, setFilter } from './filter.action';

export const initialState: filtrosValidos = 'todos';

const _filterReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFilter, (state: filtrosValidos, { filter }) => filter),
);

export function filterReducer(state: filtrosValidos, action: Action) {
  return _filterReducer(state, action);
}
