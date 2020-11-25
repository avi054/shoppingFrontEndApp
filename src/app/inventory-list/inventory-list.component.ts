import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../service/item.service';

export class Item{
  constructor(
      public id: number,
      public name: string,
      public description: string,
      public price: number
  ){

  }
}

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  /* items = [
    new Item(1, 'Let Us C', 'Basics of C programming', 299),
    new Item(2, 'Java OCJP', 'Java Concepts', 799),
    new Item(3, 'Java Black book', 'Advanced concepts in java', 599.9 )
  ] */

  message : string;
  items : Item[];

  constructor(
    private itemService: ItemService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.refreshItems();

  }

  refreshItems(){
    this.itemService.getAllItems().subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    )
  }

  getDescription(id){
    this.router.navigate(['description',id]);
  }

  addItem(){
    this.router.navigate(['description',-1]);
  }

  deleteItem(id){
    //console.log(`delete item ${id}`);
    this.itemService.deleteItemById(id).subscribe(
      response =>{
        console.log(response);
        this.message='Item Deleted successfully!'
        this.refreshItems();
        setTimeout(()=> this.message = null,3000);
      }
    )
  }

}
