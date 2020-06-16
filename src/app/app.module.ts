import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CaroComponent } from './caro/caro.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { CardsComponent } from './cards/cards.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AddDealComponent } from './add-deal/add-deal.component';
import { UpdateDealComponent } from './update-deal/update-deal.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { AddDealByLinkComponent } from './add-deal-by-link/add-deal-by-link.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddCaroComponent } from './add-caro/add-caro.component';
import { UpdateCaroComponent } from './update-caro/update-caro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DiscountConverter } from './PipeConverter/DiscountConverter';
import { LogoConverter } from './PipeConverter/LogoConverter';
import { UrlConverter } from './PipeConverter/UrlConverter';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CaroComponent,
    ProductComponent,
    BlogComponent,
    CardsComponent,
    AdminIndexComponent,
    AddBlogComponent,
    AddDealComponent,
    UpdateDealComponent,
    UpdateBlogComponent,
    AddDealByLinkComponent,
    BlogViewComponent,
    AdminLoginComponent,
    AddCaroComponent,
    UpdateCaroComponent,
    PageNotFoundComponent
    CardsComponent,
    CardComponent,

    DiscountConverter,
    LogoConverter,
    UrlConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
