import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { UpdateDealComponent } from './update-deal/update-deal.component';
import { BlogComponent} from './blog/blog.component';
import { BlogViewComponent} from './blog-view/blog-view.component';
import { AdminLoginComponent} from './admin-login/admin-login.component';
import { AddDealByLinkComponent } from './add-deal-by-link/add-deal-by-link.component'
import { AddCaroComponent } from './add-caro/add-caro.component';
import { UpdateCaroComponent } from './update-caro/update-caro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




const routes: Routes = [
  {path:'', redirectTo:'cards', pathMatch:"full"},
  {path:'product', component:ProductComponent},
  {path:'app', component:AppComponent},
  {path:'cards', component:CardsComponent},
  {path:'card', component:CardComponent},
  {path:'admin', component:AdminIndexComponent},
  {path:'addBlog', component:AddBlogComponent},
  {path:'addDeal', component:AddDealComponent},
  {path:'updateBlog', component:UpdateBlogComponent},
  {path:'updateDeal', component:UpdateDealComponent},
  {path:'blog', component:BlogComponent},
  {path:'blogview', component:BlogViewComponent},
  {path:'login', component:AdminLoginComponent},
  {path:'byLink', component:AddDealByLinkComponent},
  {path:'addCaro', component:AddCaroComponent},
  {path:'updateCaro', component:UpdateCaroComponent},
  {path:'**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
