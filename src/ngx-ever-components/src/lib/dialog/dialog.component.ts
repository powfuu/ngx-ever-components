import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() cancelText = '';
  @Input() confirmText = 'Confirmar';
  @Input() confirmAction!: () => void;
  @Input() state = new BehaviorSubject<boolean>(false);
  closeModal() {
    this.state.next(false);
  }

  confirmar(): void {
    if (this.confirmAction) {
      this.confirmAction();
      this.closeModal();
    }
  }
}
