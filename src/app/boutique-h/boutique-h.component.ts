import { Component } from '@angular/core';

@Component({
  selector: 'app-boutique-h',
  templateUrl: './boutique-h.component.html',
  styleUrl: './boutique-h.component.css'
})
export class BoutiqueHComponent {
  cards = Array.from({ length: 16 }, (_, i) => i + 1);
}
