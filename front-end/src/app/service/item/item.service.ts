import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../model/item";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:9000/items';
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.url).pipe(map(response => response));
  }

  getItemById(id:number): Observable<Item> {
    return this.httpClient.get<Item>(this.url + '/' + id);
  }

  addItem(item: Item){
    return this.httpClient.post<Item> (this.url, item);
  }
}
