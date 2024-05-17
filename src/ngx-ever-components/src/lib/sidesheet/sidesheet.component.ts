import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-sidesheet',
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.css'],
})
export class SidesheetComponent {
  @Input() state = true;
  @Input() size = 'm';
  @Input() position = 'left';
  closeSideSheet(): void {
    this.state = false;
  }
}
