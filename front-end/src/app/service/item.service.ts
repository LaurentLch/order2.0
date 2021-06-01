import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/item";
import {map} from "rxjs/operators";

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
    return this.httpClient.get<Item[]>(url).pipe(map(response => response));
  }
}
