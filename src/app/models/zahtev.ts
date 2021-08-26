import { Time } from "@angular/common";

export class Zahtev {
    idZahteva: number;
    vrsta: string;
    datum:string;
    vreme: string;
    status: string;

    constructor(idZahteva:number,vrsta:string, datum: string,vreme:string, status:string) {
        this.idZahteva =idZahteva;
        this.vrsta=vrsta;
        this.datum = datum;
        this.vreme=vreme;
        this.status=status;
        
        }
}
