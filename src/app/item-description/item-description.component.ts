import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../inventory-list/inventory-list.component';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  id: number = -1;
  item : Item;
  isDisabled=true;
  displayButton:boolean=false;

  constructor(
    private service : ItemService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id == -1){
      this.isDisabled=false;
      this.displayButton=true;
    }
    this.item= new Item(0,'','',0);//dummy
    if(this.id != -1){
    this.service.getItem(this.id).subscribe(
      response => {
        this.item = response;
      } 
    )
  }
}

addItem() {
  //console.log("Add item called"); 
  this.item.id=0;
  
  //Asynchronous - Ajax request/XMLHttpRequest implementation - Observable
  this.service.addItem(this.item).subscribe(
    (res) =>{ //first parameter
      console.log(res);
      this.router.navigate(['/'])
    },
    (err) => { //second parameter
      console.log(err);
    }
  );
}

}
