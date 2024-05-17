import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-toast',
  templateUrl: './etoast.component.html',
  styleUrls: ['./etoast.component.css'],
})
export class EtoastComponent {
  show = false;
  @Input() type = 'alert';
  @Input() text = 'Toast default text';
  @Input() position = 'bottom-right';
  @Input() duration = 2000; // Duración predeterminada de 3 segundos
  showContainer = false; // Agregar la variable showContainer

  // Método para mostrar el toast
  showToast() {
    this.show = true;
    setTimeout(() => {
      this.hideToast();
    }, this.duration);
    // Agregar la clase 'show' después de un pequeño retraso para permitir la transición
    setTimeout(() => {
      this.showContainer = true;
    }, 100);
  }

  hideToast() {
    this.showContainer = false;
    // Retrasar la actualización de 'this.show' para permitir que la transición tenga lugar
    setTimeout(() => {
      this.show = false;
    }, 500); // La misma duración que la transición en CSS
  }
}
