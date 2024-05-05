import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-flex',
  templateUrl: './eflex.component.html',
  styleUrls: ['./eflex.component.css'],
})
export class EflexComponent {
  @Input() fd = 'row';
  @Input() gap = 'n';

  getClass(): string {
    const className = `eflex ${this.fd} ${this.gap}`;
    return className;
  }
}
