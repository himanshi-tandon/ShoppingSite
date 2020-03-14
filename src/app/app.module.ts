import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { CartIconComponent } from './Components/cart-icon/cart-icon.component';
import { SortComponent } from './Components/sort/sort.component';
import { FilterComponent } from './Components/filter/filter.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartIconComponent,
    SortComponent,
    FilterComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    MatSliderModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
