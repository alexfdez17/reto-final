import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OfferService } from '../offer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-delete',
  templateUrl: './offer-delete.component.html',
  styleUrls: ['./offer-delete.component.css']
})
export class OfferDeleteComponent implements OnInit {

  currentId;

  constructor(
    private offerService: OfferService,
    private httpClient: HttpClient,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.currentId = this.route.snapshot.paramMap.get('id');

    this.httpClient.delete('http://localhost:9966/petclinic/api/offer/'+this.currentId).subscribe(data => {
      
      console.log(data);

      this.router.navigateByUrl('/offers');

    });

  }


  


}
