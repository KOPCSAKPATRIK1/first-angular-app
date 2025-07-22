import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { Title } from '@angular/platform-browser';
import { AddTaskComponent } from "./add-task/add-task";
import { NewTaskData } from './add-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class TasksComponent {
  userId = input.required<string>()
  //@Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string; // | undefined;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.push(
      {
        id: new Date().getTime().toString(),
        userId: this.userId(),
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
      }
    )
    this.isAddingTask = false
  }
}
