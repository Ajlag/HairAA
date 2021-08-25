export class User {
    email: string;
    ime: string;
    prezime: string;
    telefon: string;
    adresa: string;
    lozinka: string;
   tip: number;

    constructor(email:string,ime:string, prezime:string,telefon:string,adresa:string,lozinka:string,tip:number) {
       this.email=email;
       this.ime=ime;
       this.prezime=prezime;
       this.telefon=telefon;
       this.adresa=adresa;
       this.telefon=telefon;
       this.tip = tip;
    }
}
