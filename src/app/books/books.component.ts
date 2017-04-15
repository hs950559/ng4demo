import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  getBookDetails(book: Book) {
    this.selectedBook = book;
  }

  constructor() { }

  ngOnInit() {
    // console.log(this.booksList);
  }

}
