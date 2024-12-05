import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() progress = 0;
  @Input() backgroundColor: string = '';
  @Input() progressColor: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if ('progress' in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  ngOnInit() {}
}
