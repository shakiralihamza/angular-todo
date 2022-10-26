import {Injectable} from '@angular/core';
import {Todo} from "../interfaces/Todo";
import {TODOS} from "../mock-todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = TODOS;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoID: number) {
    this.todos.forEach((item, index) => {
      if (item.id === todoID) this.todos.splice(index, 1);
    })
  }

  doneTodo(todoID: number) {
    this.todos.forEach((item) => {
      if (item.id === todoID) item.completed = true;
    })
  }

  constructor() {
  }
}
