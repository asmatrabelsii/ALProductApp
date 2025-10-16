import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supprimer',
  imports: [CommonModule],
  templateUrl: './supprimer.html',
  styleUrl: './supprimer.css'
})
export class Supprimer implements OnInit {
  
  id!: number;

  constructor(public ps: ProduitService, public ar: ActivatedRoute, private router: Router) { 
    this.ar.params.subscribe(
      data => { this.id = data["id"]; }
    );
  }

  annuler() {
    alert('Opération de suppression annulée');
    this.router.navigate(['/afficher']);
  }

  valider() {
    this.ps.supprimerProduit(this.id).subscribe({
      next: data => {
        alert('Produit supprimé avec succès');
        this.id = 0;
        this.router.navigate(['/afficher']);
      },
      error: err => {
        alert('Erreur lors de la suppression du produit');
      }
    });
  }

  ngOnInit(): void { }
}
