import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminIndexComponent } from './admin_area/admin-index/admin-index.component';
import { BlogComponent } from './blog/blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminLoginComponent } from './admin_area/admin-login/admin-login.component';
import { AuthGuard } from './admin_area/guards/auth.guard';
import { AmazonComponent } from './amazon/amazon.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  {path:'', redirectTo:'cards', pathMatch:"full"},
  {path:'product/:id', component:ProductComponent},
  {path:'app', component:AppComponent},
  {path:'cards', component:CardsComponent},
  {path:'card', component:CardComponent},
  {path:'blog', component:BlogComponent},
  {path:'blogview', component:BlogViewComponent},
  {path:'login', component:AdminLoginComponent},
  {path:'amazon', component:AmazonComponent},
  {path:'search/:keyword', component:SearchComponent},
  {path:'flipkart', component:FlipkartComponent},
  {path:'admin', component:AdminIndexComponent, canActivate: [AuthGuard]},
  {path:'**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
