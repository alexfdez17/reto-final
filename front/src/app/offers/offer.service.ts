import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  insertOfferService(s){
    console.log("Servicio recibe objeto para POST");
    console.log(s);
    this.httpClient.post('http://localhost:9966/petclinic/api/offer/',s).subscribe(data => {
      
      console.log(data);

    }); 
  }

  deleteOfferService(id){
    this.httpClient.delete('http://localhost:9966/petclinic/api/offer/'+id).subscribe(data => {
      
      console.log(data);

    }); 
  }

  updateOfferService(s){
    console.log("Servicio recibe objeto para PUT");
    console.log(s);
    this.httpClient.put('http://localhost:9966/petclinic/api/offer/' + s.id,s).subscribe(data => {
      
      console.log(data);

    }); 
  }

}