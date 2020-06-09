import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { from } from 'rxjs';


const routes: Routes = []; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
