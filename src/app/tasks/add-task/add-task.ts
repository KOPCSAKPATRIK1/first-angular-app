import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTaskComponent {
  userId = input.required<string>()
  close = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService)


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId())
      this.close.emit()
  }

}
