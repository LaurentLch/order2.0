import { Component, OnInit } from '@angular/core';
import {Item} from "../../../model/item";
import {ItemService} from "../../../service/item/item.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  items: Item[] = [];

  addItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: ''
  });

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem() {
    this.itemService.addItem(this.addItemForm.value).subscribe(() => this.getItems());
  }


  onSubmit(): void {
    this.addItem();
    this.addItemForm.reset();
  }

  displayMessage() {
    console.log('item created successfully')
  }
}
