import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EdropdownClassModel } from './dropdown.model';

@Component({
  selector: 'e-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  showDropdown = false;
  @Input() titleDropdown = 'Dropdown';
  @Input() items: string[] = [];
  @Output() itemClicked = new EventEmitter<string>();

  onItemClick(item: string) {
    this.itemClicked.emit(item);
  }
}
