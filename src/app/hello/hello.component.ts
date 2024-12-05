import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  user = {
    name: '',
    age: 0,
    email: '',
  };
  showUserInfo() {
    alert(
      `Name: ${this.user.name}\nAge: ${this.user.age}\nEmail: ${this.user.email}`
    );
  }
}
