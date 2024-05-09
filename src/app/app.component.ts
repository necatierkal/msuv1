import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from "./components/book-card/book-card.component";
import { BOOKS } from '../db-books';


@Component({
    selector: 'app-root', //nasıl çağıralacağını belirtiyoruz. Html etiketi gibi html sayfasından kullanıp burada tanımladığımız değişkenleri çağırabiliriz
    standalone: true, //Bu component içerisinde kullanılan class ları belirtiyoruz, birden fazla yazılabilir.
    templateUrl: './app.component.html', //Kullanılan teplate url i
    styleUrl: './app.component.css' //Kullanılan stil urli
    ,
    imports: [RouterOutlet, BookCardComponent]
})
export class AppComponent { //Bu componentin kullanılabilmesi için export edilmeli. Bu classı import eden diğer tüm bileşenler içerisindeki nesneleri bu sayede kullanabilir.
  title = 'msuv1';
  book1 =BOOKS[0];
  book2 =BOOKS[1];
  book3 =BOOKS[2];
 
}
