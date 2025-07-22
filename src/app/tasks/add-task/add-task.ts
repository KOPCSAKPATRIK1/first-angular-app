import { Component, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTaskComponent {
  cancel = output<void>();
  add = output<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';



  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date: this.enteredDueDate
    })
  }
}
