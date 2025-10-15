import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-afficher',
  imports: [CommonModule, RouterLink],
  templateUrl: './afficher.html',
  styleUrl: './afficher.css'
})
export class Afficher implements OnInit {
  lesproduits: Produit[] = [];

  constructor(public ps: ProduitService) {
    this.ps.getTousProduits().subscribe({
      next: (data) => this.lesproduits = data,
      error: (error) => alert("Erreur lors du chargement des produits")
    });
  }

  ngOnInit(): void {
  }
}
