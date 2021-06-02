import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private backendUrl = 'http://localhost:9000/items'

  constructor(private httpClient: HttpClient) {
  }

  // call at http://localhost:9000/items
  getItemList(): Observable <Item[]> {
    const url = `${this.backendUrl}`;
    return this.httpClient.get<Item[]>(url);
  }

  // call at http://localhost:9000/items/:id
  getItem(theItemId: number): Observable<Item> {
    //need to build URL based on item id
    const url = `${this.backendUrl}/${theItemId}`;
    return this.httpClient.get<Item>(url);
  }

}
