import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HelloComponent,
    AuthorsComponent,
    AuthorListComponent,
    ProgressBarComponent,
    ToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fourth-angular-app';
  checked: boolean = false;
}
