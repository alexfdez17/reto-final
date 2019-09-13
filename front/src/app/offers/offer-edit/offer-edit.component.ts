import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { OfferService } from '../offer.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  formulario : FormGroup;
  objetoAEditar;
  currentId;
  currentTitle : string;
  currentDescription : string;
  currentDiscount : number;
  currentExpireDate : string;

  constructor(
    private offerService: OfferService,
    private formBuilder : FormBuilder,
    private httpClient: HttpClient,
    private router: Router, private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      title: [this.currentTitle,Validators.required],
      description: [this.currentDescription,Validators.required],
      discount: [this.currentDiscount,Validators.required],
      expireDate: [this.currentExpireDate,Validators.required],
    });

    this.httpClient.get('https://xxxxxxxxxxxx'+this.currentId).subscribe(data => {
      
      console.log(data);

    }); 

  }

  updateOfferComponent(){

    this.objetoAEditar={
      "title": this.formulario.get("title").value,
      "description": this.formulario.get("description").value,
      "discount": this.formulario.get("discount").value,
      "expireDate" : this.formulario.get("expireDate").value
    }

    this.offerService.updateOfferService(this.objetoAEditar);

  }

}