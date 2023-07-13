import { Component } from '@angular/core';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todoItems: Todo[] = [
    {
      id: 1,
      task: 'Buy groceries',
      completed: false,
      dueDate: new Date('2023-07-31'),
    },
    {
      id: 2,
      task: 'Walk the dog',
      completed: true,
      dueDate: new Date('2023-07-15'),
    },
    {
      id: 3,
      task: 'Finish homework',
      completed: false,
      dueDate: new Date('2023-07-20'),
    },
    {
      id: 4,
      task: 'Do laundry',
      completed: false,
      dueDate: new Date('2023-07-25'),
    },
    {
      id: 5,
      task: 'Clean room',
      completed: false,
      dueDate: new Date('2023-07-30'),
    },

    {
      id: 6,
      task: 'Buy groceries',
      completed: false,
      dueDate: new Date('2023-07-31'),
    },
  ];

  newTodo: Todo = {} as Todo;

  addTodo(): void {
    if (this.newTodo.task && this.newTodo.dueDate) {
      const newId = this.todoItems[this.todoItems.length - 1].id + 1;
      const todo: Todo = {
        id: newId,
        task: this.newTodo.task,
        completed: false,
        dueDate: new Date(this.newTodo.dueDate),
      };
      this.todoItems.push(todo);
      this.newTodo = {} as Todo;
    }
  }

  updateTodoStatus(todo: Todo): void {
    for (let i = 0; i < this.todoItems.length; i++) {
      if (this.todoItems[i].id == todo.id) {
        this.todoItems[i].completed = !todo.completed;
        break;
      }
    }
  }

  deleteTodo(todo: Todo): void {
    this.todoItems = this.todoItems.filter((item) => item.id != todo.id);
  }
}
