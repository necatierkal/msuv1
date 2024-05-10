import { Component } from '@angular/core';
import { BookListComponent } from "../book-list/book-list.component";
import { BOOKS } from '../../../db-books';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BookListComponent]
})
export class HomeComponent {
  books = BOOKS;
}
