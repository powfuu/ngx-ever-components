import { Component, Input } from '@angular/core';
import { EbuttonClassModel } from './ebutton.model';

@Component({
  selector: 'e-button',
  templateUrl: './ebutton.component.html',
  styleUrls: ['./ebutton.component.css'],
})
export class EbuttonComponent {
  @Input() theme = 'primary';
  @Input() size = 'md';
  getTheme(): string {
    const themes: EbuttonClassModel = {
      primary: `primary ${this.size}`,
      secondary: `secondary ${this.size}`,
      third: `third ${this.size}`,
    };
    return themes[this.theme];
  }
}
