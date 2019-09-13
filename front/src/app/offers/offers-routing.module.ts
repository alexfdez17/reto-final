import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OfferAddComponent} from './offer-add/offer-add.component';

const offerRoutes: Routes = [
  //{path: 'offers', component: OffersListComponent},
  {path: 'offers/add', component: OfferAddComponent},
  //{path: 'offers/:id', component: OffersDetailComponent},
  //{path: 'offers/:id/edit', component: OffersEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(offerRoutes)],
  exports: [RouterModule]
})

export class OffersRoutingModule {
}
