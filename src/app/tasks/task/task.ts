import { Component, Input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card";



@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class TaskComponent {
 @Input({required: true}) task!: Task;
 complete = output<string>();

 onCompleteTask() {
  this.complete.emit(this.task.id);
 }
}
