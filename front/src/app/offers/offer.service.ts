import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  getAllOffersService(){
    return this.httpClient.get('http://localhost:9966/petclinic/api/offer');
  }

  getAllOfferNotExpiredService(){
    return this.httpClient.get('http://localhost:9966/petclinic/api/offer/notexpired');
  }

  insertOfferService(s){
    console.log("Servicio recibe objeto para POST");
    console.log(s);
    this.httpClient.post('http://localhost:9966/petclinic/api/offer/',s).subscribe(data => {
      
      console.log(data);

      this.router.navigateByUrl('/offers');

    }); 
  }

  deleteOfferService(id){
    this.httpClient.delete('http://localhost:9966/petclinic/api/offer/'+id).subscribe(data => {
      
      console.log(data);

      this.router.navigateByUrl('/offers');

    }); 
  }

  updateOfferService(id,s){
    console.log("Servicio recibe objeto para PUT");
    console.log(s);
    this.httpClient.put('http://localhost:9966/petclinic/api/offer/' + id,s).subscribe(data => {
      
      console.log(data);

      this.router.navigateByUrl('/offers');

    }); 
  }

}