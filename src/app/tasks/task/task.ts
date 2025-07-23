import { Component, inject, input, Input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card";
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class TaskComponent {
 @Input({required: true}) task!: Task;
 private tasksService = inject(TasksService)

 onCompleteTask() {
  this.tasksService.removeTask(this.task.id)
 }
}
