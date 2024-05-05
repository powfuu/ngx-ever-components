import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-loader',
  template: `
    <div class="loader-container" *ngIf="show">
      <div class="loader-content">
        <div class="loader"></div>
        <p *ngIf="text.length > 0">{{ text }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./eloading.component.css'],
})
export class EloadingComponent {
  @Input() text = 'Loading...';
  @Input() show = false;

  closeLoader() {
    this.show = false;
  }

  showLoader() {
    this.show = true;
  }
}
