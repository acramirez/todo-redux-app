import { createAction, props } from "@ngrx/store";

export const create = createAction('[TODO] Create Todo', props<{ title: string }>());
export const toggle = createAction('[TODO] Toggle Todo', props<{ id: number }>());
export const edit = createAction('[TODO] Edit Todo', props<{ id: number, title: string }>());
export const remove = createAction('[TODO] Remove Todo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] ToggleAll Todo', props<{ completed: boolean }>());
export const clearCompleted = createAction('[TODO] ClearCompleted Todo');
