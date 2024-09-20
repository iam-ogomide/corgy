import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'collections',
    component:CollectionsComponent,
  },
  {
    path:'product-detail/:name/:id',
    component:ProductDetailsComponent,
  },
  {
    path:'cart',
    component:CartComponent,
  },
  {
    path:'blog',
    component:BlogComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
