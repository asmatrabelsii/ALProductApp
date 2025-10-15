import { Routes } from '@angular/router';
import { Supprimer } from './supprimer/supprimer';
import { Modifier } from './modifier/modifier';
import { Ajouter } from './ajouter/ajouter';
import { Afficher } from './afficher/afficher';

export const routes: Routes = [
    {path: 'afficher', component: Afficher},
    {path: 'ajouter', component: Ajouter},
    {path: 'modifier/:id', component: Modifier},
    {path: 'supprimer/:id', component: Supprimer},
    {path: '', component: Afficher}
];
