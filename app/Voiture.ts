// "Moule" ou modéle d'objet
export class Voiture {
    // attribut d'une classe (variables)
    couleur: string;
    marque: string;
    private _nbRoues: number;

    // constructor est la méthode appelée quand on fait "new Voiture()"
    constructor(couleur: string, marque: string, nbRoues: number = 4) {
        this.couleur = couleur;
        this.marque = marque;
        if(nbRoues>0 && nbRoues<5){
            this._nbRoues = nbRoues;
        }else{
            this._nbRoues = 4;
        }
    }
    //accesseur (getter): permet de récupérer un attribut de manière sécurisée.
    get nbRoues(): number{
        // il est possible de mettre de la logique (du code) avant de retourner la valeur
        return this._nbRoues;
    }

    // mutateur (setter): permet de changer la valeur d'un attribut de manière sécurisée.
    set nbRoues(nbRoues: number){
        if(nbRoues>0 && nbRoues<5){
            this._nbRoues = nbRoues;
        }else{
            this._nbRoues = 4;
        }
    }


    // méthode de la classe voiture (fonction)
    // cette méthode est propre à l'objet (elle concerne seulement l'objet qui l'appelle)
    rouler(distance: number): void{
        console.log(`Je suis une voiture ${this.couleur} et je roule pendant ${distance} km`)
    }
}

// // création d'une instance de la classe Voiture => créer un objet voiture
// const voitureRouge = new Voiture();
// const voitureRouge1 = new Voiture();
// const voitureRouge2 = new Voiture();
// const voitureRouge3 = new Voiture();