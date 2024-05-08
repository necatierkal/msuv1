import { Component } from '@angular/core';
import { BOOKS } from '../../../db-books';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
book = BOOKS[0];
}
