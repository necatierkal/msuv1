import { Component, Input } from '@angular/core';
import { BOOKS } from '../../../db-books';
import { Book } from '../../../models/book';

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  //@Input() title: string|undefined;
  @Input() pageCount: number|undefined;
  @Input() book: Book|undefined;
  //book = BOOKS[0];

}
