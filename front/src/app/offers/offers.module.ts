import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OffersListComponent } from './offers-list/offers-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [OfferAddComponent, OffersListComponent]
})
export class OffersModule { }
