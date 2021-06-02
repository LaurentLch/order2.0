import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../../service/item/item.service";
import {Item} from "../../../model/item";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  // @ts-ignore
  item : Item;
  // @ts-ignore
  id:number;


  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    // @ts-ignore
    this.route.paramMap.subscribe(params => {
      // @ts-ignore
      this.id = params.get('id');
    });

  }

  ngOnInit(): void {
      this.getItemDetails();
  }

   getItemDetails() {
    //get the id param string and convert string to a number using the + symbol

     this.itemService.getItem(this.id).subscribe(
       data => {
         this.item = data;
       }
     )
  }
}
