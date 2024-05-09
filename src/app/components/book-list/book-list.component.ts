import { Component ,Input} from '@angular/core';
import { Book } from '../../../models/book';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  @Input() books:Book[]|undefined;


}

