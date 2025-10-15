import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier',
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier.html',
  styleUrl: './modifier.css'
})
export class Modifier implements OnInit {
  
  p: Produit | null = null;

  constructor(public ps: ProduitService, public ar: ActivatedRoute, private router: Router) { 
    this.ar.params.subscribe(data => {
      const id = Number(data['id']);
      this.ps.getProduit(id).subscribe(produit => {
        this.p = produit;
      });
    });
  }

  modifier(f: NgForm) {
    let l = f.value['lib'];
    let pr = f.value['prix'];
    let dc = f.value['dc'];
    if (!this.p) {
      alert("Produit non chargé");
      return;
    }
    if (l!="" && pr>0 && dc!="") {
      this.p.libelle = l;
      this.p.prix = pr;
      this.p.dateCreation = new Date(dc);
      this.ps.modifierProduit(this.p).subscribe({
        next: () => {
          alert("Produit modifié avec succès");
          this.router.navigate(['/afficher']);
        },
        error: () => { alert("Erreur lors de la modification") }
      });
    } else {
      alert("Données invalides");
    }
  }

  ngOnInit(): void { }
}
