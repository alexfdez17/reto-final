import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient: HttpClient) { }

  getAllOffersService(){
    //return this.httpClient.get('http://localhost:3000/offers');
    return this.httpClient.get('http://localhost:9966/petclinic/api/offer');
  }

  getAllOfferNotExpiredService(){
    return this.httpClient.get('http://localhost:9966/petclinic/api/offer/notexpired');
  }

  insertOfferService(s){
    console.log("Servicio recibe objeto para POST");
    console.log(s);
    this.httpClient.post('https://jsonplaceholder.typicode.com/todos/',s).subscribe(data => {
      
      console.log(data);

    }); 
  }

  deleteOfferService(id){
    this.httpClient.delete('https://jsonplaceholder.typicode.com/todos/'+id).subscribe(data => {
      
      console.log(data);

    }); 
  }

  updateOfferService(s){
    console.log("Servicio recibe objeto para PUT");
    console.log(s);
    this.httpClient.put('https://jsonplaceholder.typicode.com/todos/',s).subscribe(data => {
      
      console.log(data);

    }); 
  }

}