import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }


  getAllOffersService(){
    return this.httpClient.get('http://localhost:3000/offers');
  }


  getOffers(){

    //

  }

  insertOfferService(s){
    console.log("Servicio recibe objeto para POST");
    console.log(s);
    this.httpClient.post('https://jsonplaceholder.typicode.com/todos/',s).subscribe(data => {
      
      console.log(data);

    }); 
  }

  deleteOffer(s){
   //  
  }

  updateOffer(s){
    // 
  }

}