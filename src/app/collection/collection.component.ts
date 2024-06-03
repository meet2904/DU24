import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  garments = Array.from({ length: 11 }, (_, i) => i + 2);
}
