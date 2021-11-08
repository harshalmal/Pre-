import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AboutProductsComponent } from './about-products/about-products.component';
import { TestimonialVideosComponent } from './testimonial-videos/testimonial-videos.component';



@NgModule({
  declarations: [
    ProductsComponent,
    AboutProductsComponent,
    TestimonialVideosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
