import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const  setFilter = createAction('[Filter] Set Filter', props<{ filter: filtrosValidos }>());
export const changeFilter = createAction('[Filter] Change Filter', props<{ filter: filtrosValidos }>());
