import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { authors } from '../authors';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css',
})
export class AuthorsComponent {
  authors = authors;
}
