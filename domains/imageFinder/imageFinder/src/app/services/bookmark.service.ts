import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  items = [];
  constructor() { }

  addBookmark(item: any) {
    // @ts-ignore
    this.items.push(item);
  }
}
