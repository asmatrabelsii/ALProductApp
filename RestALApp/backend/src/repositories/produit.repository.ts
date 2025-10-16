import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BasegestionDsDataSource} from '../datasources';
import {Produit, ProduitRelations} from '../models';

export class ProduitRepository extends DefaultCrudRepository<
  Produit,
  typeof Produit.prototype.id,
  ProduitRelations
> {
  constructor(
    @inject('datasources.basegestion_ds') dataSource: BasegestionDsDataSource,
  ) {
    super(Produit, dataSource);
  }
}
