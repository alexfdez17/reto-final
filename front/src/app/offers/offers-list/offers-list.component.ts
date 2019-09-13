import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';
import { Offer } from '../offer';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private router: Router, private offerService: OfferService,private route: ActivatedRoute) { }

  offers;

  ngOnInit() {

    this.offerService.getAllOffersService().subscribe(
      data => {
        this.offers = data;
      },
      error => {
        console.log("Error al obtener datos");
      }
    );
  }

  gotoHome() {
    this.router.navigate(['/welcome']);
  }

}
