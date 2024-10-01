import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CircleComponent } from './circle/circle.component';
import { SwipecaroComponent } from './component/swipecaro/swipecaro.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CollectionsComponent } from './collections/collections.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CircleComponent,
    SwipecaroComponent,
    FooterComponent,
    ProductDetailsComponent,
    CollectionsComponent,
    CartComponent,
    BlogComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
