export class Cat {

    private _id : string;
    private _nom : string;
    private _couleur : string;
    private _age : number;

    constructor(id: string, nom: string, couleur: string, age : number) {
    this._id = id;
    this._nom = nom;
    this._couleur = couleur;
    this._age = age;
    }

    get age() {
        return this._age;
    }

    get nom() {
        return this._nom;
    }

    get couleur() {
        return this._couleur;
    }

    get id() {
        return this._id;
    }

    set age(age : number) {
        this._age = age;
    }

    set nom(nom : string) {
        this._nom = nom;
    }

    set couleur(couleur : string) {
        this._couleur = couleur;
    }

}