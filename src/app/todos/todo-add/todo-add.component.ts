import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor( private store: Store<AppState> ) {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregar(){

    console.log(this.txtInput.valid);
    console.log(this.txtInput.value);
    if(this.txtInput.valid){
      this.store.dispatch({
        type: '[TODO] Create Todo',
        title: this.txtInput.value
      });
      this.txtInput.reset();
    }
  }

}
