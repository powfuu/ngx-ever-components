import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  showDropdown = false;
  @Input() titleDropdown = 'Dropdown';
  @Input() items: string[] = [];
  @Input() clickAction!: (item: string) => void;

  onItemClick(item: string) {
    if (this.clickAction) {
      this.clickAction(item);
    }
  }
}
