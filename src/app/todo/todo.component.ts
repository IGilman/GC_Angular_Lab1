import { Component, OnInit } from '@angular/core';
//this auto imported with my intellisense
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //making an array with objects of type interface
  todos: Todo[] = [
    { task: "Mow the lawn", completed: false },
    { task: "Take out trash", completed: true },
    { task: "Walk the dog", completed: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
