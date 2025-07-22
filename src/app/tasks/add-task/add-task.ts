import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTaskComponent {
  cancel = output<void>()
  
  onCancel() {
    this.cancel.emit()
  }
}
