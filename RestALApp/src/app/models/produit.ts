export class Produit {
    public id?: number;
    public libelle: string;
    public prix: number;
    public dateCreation: Date;

    constructor(libelle: string, prix: number, dc: Date, id?: number) {
        this.id = id;
        this.libelle = libelle;
        this.prix = prix;
        this.dateCreation = dc;
    }
}
