import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-sidesheet',
  templateUrl: './sidesheet.component.html',
  styleUrls: ['./sidesheet.component.css'],
})
export class SidesheetComponent {
  @Input() state = new BehaviorSubject<boolean>(false);
  @Input() size = 'm';
  @Input() position = 'left';
  closeSideSheet(): void {
    this.state.next(false);
  }
}
