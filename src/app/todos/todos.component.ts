import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  constructor() { }

  ngOnInit() {

    this.todos = [
      { text: 'Pick up kids'},
      { text: 'Pick up mum'},
      { text: 'Pick up wife'},
      { text: 'Pick up dog'},
      { text: 'Pick up cat'},
    ];
  }

  addTodo(){
    this.todos.push({
      text: this.text
    })
    this.text = "";
  }

  deleteTodo(todoText){
    for (var i=0;i<this.todos.length;i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
  }

}
