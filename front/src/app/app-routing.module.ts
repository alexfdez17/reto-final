import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './parts/page-not-found/page-not-found.component';
import {WelcomeComponent} from './parts/welcome/welcome.component';
import {OfferAddComponent } from './offers/offer-add/offer-add.component';

const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'offers/add', component: OfferAddComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
