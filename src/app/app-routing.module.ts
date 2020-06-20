import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AmazonComponent} from './amazon/amazon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminIndexComponent } from './admin_area/admin-index/admin-index.component';
import { AddBlogComponent } from './admin_area/add-blog/add-blog.component';
import { AddDealComponent } from './admin_area/add-deal/add-deal.component';
import { UpdateBlogComponent } from './admin_area/update-blog/update-blog.component';
import { UpdateDealComponent } from './admin_area/update-deal/update-deal.component';
import { BlogComponent } from './blog/blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminLoginComponent } from './admin_area/admin-login/admin-login.component';
import { AddDealByLinkComponent } from './admin_area/add-deal-by-link/add-deal-by-link.component';
import { AddCaroComponent } from './admin_area/add-caro/add-caro.component';
import { UpdateCaroComponent } from './admin_area/update-caro/update-caro.component';
import { from } from 'rxjs';




const routes: Routes = [
  {path:'', redirectTo:'cards', pathMatch:"full"},
  {path:'product/:id', component:ProductComponent},
  {path:'app', component:AppComponent},
  {path:'cards', component:CardsComponent},
  {path:'card', component:CardComponent},
  {path:'blog', component:BlogComponent},
  {path:'blogview', component:BlogViewComponent},
  {path:'login', component:AdminLoginComponent},
  {path:'admin', component:AdminIndexComponent},
  {path:'**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
