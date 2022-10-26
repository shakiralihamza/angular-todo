import {Component, OnInit} from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {
  todo = ''

  constructor(private todoService: TodoService) {
  }

  addTodo(): void {
    if (this.todo.length > 0) {
      this.todoService.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: this.todo,
        completed: false
      })
      this.todo = ''
    }
  }

  ngOnInit(): void {
  }

}
