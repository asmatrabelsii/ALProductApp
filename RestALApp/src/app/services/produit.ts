import { Injectable } from '@angular/core';

import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL = 'http://localhost:3000/produits';

  constructor(public httpclient: HttpClient) { }

  getTousProduits() {
    return this.httpclient.get<Produit[]>(this.apiURL);
  }

  getProduit(id: number) {
    return this.httpclient.get<Produit>(this.apiURL + '/' + id);
  }

  supprimerProduit(id: number) {
    return this.httpclient.delete<any>(this.apiURL + '/' + id);
  }

  modifierProduit(p: Produit) {
    const id = (p as Produit).id;
    return this.httpclient.put<Produit>(`${this.apiURL}/${id}`, p);
  }

  ajouterProduit(p: Produit | any) {
    return this.httpclient.post<any>(this.apiURL, p);
  }
}
