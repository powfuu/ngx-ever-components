import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-modal',
  templateUrl: './emodal.component.html',
  styleUrls: ['./emodal.component.css'],
})
export class EmodalComponent {
  @Input() title = '';
  @Input() state = new BehaviorSubject<boolean>(false);
  closeModal() {
    this.state.next(false);
  }
}
