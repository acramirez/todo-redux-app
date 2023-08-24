import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { todosReducer } from '../todos.reducer';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  @Input() todo: Todo = new Todo('');
  chkCompleted: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();
  editando: boolean = false;

  constructor(
    private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.title, Validators.required);
    this.chkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch({todosReducer, type: '[TODO] Toggle Todo', id: this.todo.id});
    });
  }

  editar(){
    console.log(this.todo);
    this.editando = true;
    this.txtInput.setValue(this.todo.title);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid){return;}
    if(this.txtInput.value === this.todo.title){return;}
    this.store.dispatch({todosReducer, type: '[TODO] Edit Todo', id: this.todo.id, title: this.txtInput.value});
  }

  delete(){
    this.store.dispatch({todosReducer, type: '[TODO] Remove Todo', id: this.todo.id});
  }


}
