import {Component, OnInit} from '@angular/core';
import {Todo} from "../interfaces/Todo";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todoID: number) {
    this.todoService.deleteTodo(todoID);
  }

  doneTodo(todoID: number) {
    this.todoService.doneTodo(todoID)
  }
}
