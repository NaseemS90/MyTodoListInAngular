import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  desc: string;
  title: string;
  todos: Todo[];
  initialTodos: any;

  constructor() {
    this.initialTodos = localStorage.getItem('todos');

    if (this.initialTodos == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.initialTodos);
    }
  }

  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoComplete(todo: Todo) {
    const index = this.todos.indexOf(todo);

    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
