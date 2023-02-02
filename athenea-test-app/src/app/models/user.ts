export class User {
    nom: string;
    cognom: string; 
    email: string;
    dni: string;

    constructor(nom: string, cognom: string, email: string, dni: string) {
        this.nom = nom;
        this.cognom = cognom;
        this.email = email;
        this.dni = dni;
    }
}
