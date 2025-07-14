import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class User {
 /*
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  })
*/
  @Input({required: true}) id!:string
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar
  }


  onSelectUser() {
    this.select.emit(this.id);
  }
}
