import { Time } from "@angular/common";

export class Zahtev {
    idZahteva: number;
    email: string;
    vrsta: string;
    datum:string;
    vreme: string;
    status: string;

    constructor(idZahteva:number,email:string,vrsta:string, datum: string,vreme:string, status:string) {
        this.idZahteva =idZahteva;
        this.email = email;
        this.vrsta=vrsta;
        this.datum = datum;
        this.vreme=vreme;
        this.status=status;
        
        }
}
