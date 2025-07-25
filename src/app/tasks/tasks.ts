import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { AddTaskComponent } from "./add-task/add-task";
import { NewTaskData } from './add-task/new-task.model';
import { TasksService } from './tasks.service';

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

  constructor (private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
