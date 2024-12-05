import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  imports: [NgIf],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css',
})
export class AuthorDetailComponent implements OnInit {
  @Input() author!: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}

  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
