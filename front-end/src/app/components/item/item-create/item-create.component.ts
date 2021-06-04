import { Component, OnInit } from '@angular/core';
import {Item} from "../../../model/item";
import {ItemService} from "../../../service/item/item.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  items: Item[] = [];

  addItemForm = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', [Validators.required,Validators.maxLength(255)]],
    price: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    amountOfStock: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
  });

  // CHARACTER COUNTER FIELDS
  numberOfCharacters: number = 0;
  maxAmountOfCharacters: number = 255;
  interaction = {
    textValue: ''
  };


  constructor(
    private itemService: ItemService,
    private _formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem() {
    this.itemService.addItem(this.addItemForm.value).subscribe(() => this.getItems());
  }

  get name(): any{
    return this.addItemForm.get('name')
  }

  get description():any{
    return this.addItemForm.get('description')
  }

  get price(): any{
    return this.addItemForm.get('price')
  }

  get amountOfStock(): any{
    return this.addItemForm.get('amountOfStock')
  }

  onSubmit(): void {
    this.addItem();
    this.addItemForm.reset();
    this.router.navigateByUrl('/items');
  }

  displayMessage() {
    console.log('item created successfully')
  }

  onModelChange(textValue: string) {
    this.numberOfCharacters = textValue.length;
  }
}
