import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  toggle: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {}

  toggleAll() {
    this.toggle = !this.toggle;
    this.store.dispatch({ type: '[TODO] ToggleAll Todo', completed: this.toggle } );
  }

}
