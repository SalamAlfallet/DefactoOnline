import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManListComponent } from './man-list/man-list.component';
import { WomanListComponent } from './woman-list/woman-list.component';
import { BabyListComponent } from './baby-list/baby-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: ' ', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'aboutus', component: AboutUsComponent},
  {path:'category' , component:CategoryComponent},
  {path:'manlist',component:ManListComponent },
  {path :'manageProduct', component:ManageProductsComponent},
  {path:'womanlist',component:WomanListComponent},
  {path:'babylist',component:BabyListComponent},
   {path:'editProduct/:id',component:EditProductComponent},
   {path:"AppComponent",component:AppComponent},
   {path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


