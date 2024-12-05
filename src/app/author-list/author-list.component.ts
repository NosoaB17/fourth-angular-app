import { Component } from '@angular/core';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
import { authors, Author } from '../authors';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-author-list',
  imports: [AuthorDetailComponent, NgFor],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent {
  authors = authors;
  constructor() {}
  ngOnInit() {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
