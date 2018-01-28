import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  styles: [':host { display: block; }'],
  template: `
    <span>Hello, {{ name }}! ({{ timeoutWorks }})</span>
  `,
})
export class FirstComponent {
  @Input() name = 'world';
  @Input() color = 'primary';
  @Output() greet = new EventEmitter<void>();
  timeoutWorks = 1;

  constructor() {
    setInterval(() => this.timeoutWorks += 1, 1000);
  }
}
