import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../../service/item/item.service";
import {Item} from "../../../model/item/item";

@Component({
  selector: 'app-item',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  // @ts-ignore
  items : Item[];
  searchText: string = '';

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.itemService.getItemList().subscribe(data => {
      this.items = data;
    })
  }
}
