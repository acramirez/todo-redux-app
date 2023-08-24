import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filter/filter.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filter;
      this.pendientes = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  cambiarFiltro( filtro: filtrosValidos ) {
    this.store.dispatch( { type: '[Filter] Set Filter', filter: filtro } );
  }

  clearAll(){
    this.store.dispatch({type: '[TODO] ClearCompleted Todo'});
  }
}
