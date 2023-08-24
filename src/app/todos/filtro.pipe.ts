import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filter/filter.action';

@Pipe({
  name: 'filterToDo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filter: filtrosValidos): Todo[] {
    switch (filter) {
      case 'completados':
        return todos.filter( todo => todo.completed );
      case 'pendientes':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }
  }

}
