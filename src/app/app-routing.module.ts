import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { CardsComponent } from './cards/cards.component';



const routes: Routes = [
  {path: '', redirectTo: '/cards', pathMatch: 'full'},
{path: '', component: ProductComponent},
{path: 'cards', component: CardsComponent},
{path: 'product/:id', component: ProductComponent},
{path: '**', component: CardsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
