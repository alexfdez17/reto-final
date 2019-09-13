import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OfferService } from '../offer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {

  formulario : FormGroup;
  objetoAInsertar;

  constructor(
    private offerService: OfferService,
    private formBuilder : FormBuilder,
    private httpClient: HttpClient,
    private router: Router, private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      discount: ['',Validators.required],
      expireDate: ['',Validators.required]
    })

  }

  insertOffer(){
    this.objetoAInsertar={
      "title": this.formulario.title,
      "description": this.formulario.description,
      "discount": this.formulario.discount,
      "expireDate" : this.formulario.expireDate
    }
  }

}