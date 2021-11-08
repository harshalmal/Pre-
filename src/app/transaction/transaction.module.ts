import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { CashComponent } from './cash/cash.component';



@NgModule({
  declarations: [
    PrepaidComponent,
    CashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
