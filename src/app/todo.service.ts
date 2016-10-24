import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() { 
    super()
    console.log('Todo Service Initialised..');
    this.load();
  }

  getTodos(){
    return JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(newTodo){
    var todos = this.getTodos();

    todos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todo){
    var todos = this.getTodos();
    for (var i=0;i<todos.length;i++) {
      if (todos[i].text == todo) {
        todos.splice(i, 1);
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldTodo, newTodo){
    var todos = this.getTodos();
    for (var i=0;i<todos.length;i++) {
      if (todos[i].text == oldTodo) {
        todos[i].text = newTodo;
      }
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
