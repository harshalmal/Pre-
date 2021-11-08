import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { TwitterComponent } from './twitter/twitter.component';



@NgModule({
  declarations: [
    FacebookComponent,
    InstagramComponent,
    TwitterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocialMediaModule { }
