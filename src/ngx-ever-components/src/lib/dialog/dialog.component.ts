import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() title = 'sdfnasd';
  @Input() desc = 'sadsd';
  @Input() cancelText = '';
  @Input() confirmText = 'Confirmar';
  @Input() confirmAction!: () => void;
  @Input() state = new BehaviorSubject<boolean>(true);
  closeModal() {
    this.state.next(false);
  }

  confirmar(): void {
    if (this.confirmAction) {
      this.confirmAction();
    }
  }
}
