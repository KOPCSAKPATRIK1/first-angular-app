import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';



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

  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  */

  @Input({required: true}) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
