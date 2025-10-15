import {Entity, model, property} from '@loopback/repository';

@model()
export class Produit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  libelle: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'date',
    required: true,
  })
  dateCreation: string;

  @property({
    type: 'date',
    required: true,
  })
  dateAjout: string;

  constructor(data?: Partial<Produit>) {
    super(data);
  }
}

export interface ProduitRelations {
  // describe navigational properties here
}

export type ProduitWithRelations = Produit & ProduitRelations;
