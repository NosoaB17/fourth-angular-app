import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent implements OnInit {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}
  ngOnInit() {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
