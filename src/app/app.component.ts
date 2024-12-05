import { Component } from '@angular/core';

import { HelloComponent } from './hello/hello.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [
    HelloComponent,
    AuthorsComponent,
    AuthorListComponent,
    ProgressBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fourth-angular-app';
}
