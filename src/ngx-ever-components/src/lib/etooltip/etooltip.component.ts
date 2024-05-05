import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-tooltip',
  templateUrl: './etooltip.component.html',
  styleUrls: ['./etooltip.component.css'],
})
export class EtooltipComponent {
  @Input() tooltipText = 'Tooltip default text';
}
