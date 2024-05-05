import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'e-search',
  templateUrl: './esearch.component.html',
  styleUrls: ['./esearch.component.css'],
})
export class EsearchComponent {
  @Input() value = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder = 'Search...';

  emitValueChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
