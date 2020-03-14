import { Component,OnInit } from '@angular/core';
import { Shoplist } from './shoplist';
import { ListService } from './list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-site';
  shoplist: Shoplist[] = [];
  
  constructor( private listservice:ListService ) { }
  getShoppinglist() {
    this.listservice.getShoppinglist()
    .subscribe(resp => {
     for (const data of resp.body) {
        this.shoplist.push(data);
      }
      console.log(this.shoplist);
    });
  }



  // getShoppinglist() {
  //   console.log("Himanshi");
  //   this.listservice.getShoppinglist()
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.getlist.push({
  //           name: d.name,
  //           price: d.price
  //         });
  //       }
  //       console.log(this.getlist);
  //     });
  // }
 
}
