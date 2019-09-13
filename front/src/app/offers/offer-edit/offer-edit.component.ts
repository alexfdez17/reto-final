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

    this.currentId = this.route.snapshot.paramMap.get('id');

    this.formulario = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required],
      discount: ['',Validators.required],
      expireDate: ['',Validators.required],
    });

    this.httpClient.get('http://localhost:9966/petclinic/api/offer/'+this.currentId).subscribe(data => {
      
      this.formulario.get("title").setValue(data['title']);
      this.formulario.get("description").setValue(data['description']);
      this.formulario.get("discount").setValue(data['discount']);
      this.formulario.get("expireDate").setValue(data['expireDate']);

    }); 

  }

  updateOfferComponent(){

    this.objetoAEditar={
      "title": this.formulario.get("title").value,
      "description": this.formulario.get("description").value,
      "discount": this.formulario.get("discount").value,
      "expireDate" : this.formulario.get("expireDate").value
    }

    this.offerService.updateOfferService(this.currentId,this.objetoAEditar);

  }

}
















