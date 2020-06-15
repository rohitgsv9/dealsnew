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
import { CardComponent } from './card/card.component';

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
