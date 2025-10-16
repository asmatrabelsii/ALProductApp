import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ProduitService } from '../services/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter.html',
  styleUrl: './ajouter.css'
})
export class Ajouter implements OnInit {
  constructor(public ps: ProduitService, private router: Router) { }

  ajouter(f: NgForm) {
    let l = f.value['lib'];
    let prix = f.value['prix'];
    let dc = f.value['dc'];

    // Validate input data
    if (!l || !prix || !dc) {
      alert("Tous les champs sont requis.");
      return;
    }

    // Convert the string date to a Date object
    let dateObj = new Date(dc);
    
    // Create product without ID - server will auto-generate it
    // Convert date to ISO string format for backend compatibility
    let p = {
      libelle: l.trim(), // Trim whitespace
      prix: parseFloat(prix), // Ensure prix is a number
      dateAjout: dateObj.toISOString(),
      dateCreation: dateObj.toISOString()
    };

    this.ps.ajouterProduit(p).subscribe({
      next: (data) => {
        console.log('Produit ajouté:', data);
        alert("Produit ajouté avec succès");
        f.reset();
        this.router.navigate(['/afficher']);
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du produit:', err);
        // More detailed error message
        let errorMsg = "Erreur lors de l'ajout du produit";
        if (err.error && err.error.error) {
          errorMsg += ": " + JSON.stringify(err.error.error);
        } else if (err.message) {
          errorMsg += ": " + err.message;
        }
        alert(errorMsg);
      }
    });
  }

  ngOnInit(): void { }
}
