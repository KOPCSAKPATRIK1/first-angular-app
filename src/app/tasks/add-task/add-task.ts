import { Component, output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTaskComponent {
  cancel = output<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';



  onCancel() {
    this.cancel.emit();
  }
}
