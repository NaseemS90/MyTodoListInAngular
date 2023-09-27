import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  constructor() {}

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() completeTodo: EventEmitter<Todo> = new EventEmitter();
  @Input() todo: Todo;
  @Input() i: number;

  onDelete(todo: Todo) {
    console.log('Delete Button has been clicked');
    this.deleteTodo.emit(todo);
  }

  checkboxClicked(todo: Todo) {
    this.completeTodo.emit(todo);
  }
}
