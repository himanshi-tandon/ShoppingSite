import { Component, Input, HostListener  } from '@angular/core';
import {ShoppingListComponent } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() shoppinglistcomponent: ShoppingListComponent;

  filterData(searchItem) {
    
    this.shoppinglistcomponent.filterItem(searchItem
      );
  }
  // searchText;
  constructor() { }

  ngOnInit() {
  }

 
}
