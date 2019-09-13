import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OfferService {

  constructor(private httpClient: HttpClient) { }

  getOffers(){

    //

  }

  insertOffer(s){



    this.ownserService.insertaMascota(this.objetoAInsertar).subscribe(data => {
      console.log(data);

      var myTable = document.getElementById('mascotukistabla'),
      tbody = myTable.getElementsByTagName('tbody')[0],
      tr = tbody.insertRow(0);
  

      var td = document.createElement('td');
      td.innerHTML = data['title'];
      tr.appendChild(td);

    });

  }

  deleteOffer(s){
    //  
  }

  updateOffer(s){
    // 
  }

}