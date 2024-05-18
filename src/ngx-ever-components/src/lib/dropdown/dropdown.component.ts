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

  private isMobile = false;

  constructor() {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  toggleDropdown(): void {
    if (this.isMobile) {
      this.showDropdown = !this.showDropdown;
    }
  }

  onItemClick(item: string) {
    if (this.clickAction) {
      this.clickAction(item);
    }
    this.showDropdown = false; // Close dropdown after click
  }
}
