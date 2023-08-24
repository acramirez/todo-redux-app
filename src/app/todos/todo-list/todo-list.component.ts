import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  currentFilter: filtrosValidos = 'todos';

  constructor(  private store: Store<AppState>) { }

  ngOnInit(): void {
      // this.store.select('todos').subscribe( todos => this.todos = todos);
      this.store.subscribe( ({todos, filter}) => {
        this.todos = todos;
        this.currentFilter = filter;
      });
  }

}
