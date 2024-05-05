import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'e-input',
  templateUrl: './einput.component.html',
  styleUrls: ['./einput.component.css'],
})
export class EinputComponent {
  @Input() value!: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder = '';

  emitValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
