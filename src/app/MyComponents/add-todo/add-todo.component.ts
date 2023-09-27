import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  todos: Todo[];
  initialTodos: any;

  constructor(private router: Router) {
    this.initialTodos = localStorage.getItem('todos');
    debugger
    if (this.initialTodos == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.initialTodos);
    }
  }

  @Output() todoAdd = new EventEmitter<Todo>();
  title: string;
  desc: string;

  onSubmit() {
    const todo = {
      sno: 5,
      title: this.title,
      desc: this.desc,
      active: true,
    };
    if (this.router.url == '/addtodo') {
      console.log(this.router.url);
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      this.todoAdd.emit(todo);
    }
  }
}
