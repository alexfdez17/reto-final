import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/welcome']);
  }

}
