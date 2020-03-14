import { Component, Input } from '@angular/core';
import { ListService } from '../../list.service';
import { Shoplist } from 'src/app/shoplist';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {

  //searchText;
  shoplist: Shoplist[] = [];
  tempshoplist: Shoplist[] = [];
  sp:Shoplist;
  constructor( private listservice:ListService ) { }
  getShoppinglist() {
    this.listservice.getShoppinglist()
    .subscribe(resp => {
  
     this.shoplist=resp.body;
    
      this.tempshoplist=resp.body;
    console.log(resp);
    });
 

}

filterItem(args){
  console.log(args);
  this.listservice.getShoppinglist()
    .subscribe(resp => {
  
     this.shoplist=resp.body.filter(p=>p.name.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
  
    });
  // include , indexof, reduce, filter , == @input @output
 }

ngOnInit() {
  this.getShoppinglist();
}


}


