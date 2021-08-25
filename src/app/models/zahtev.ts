import { Time } from "@angular/common";

export class Zahtev {
    idZahteva: number;
    vrsta: string;
    datum: Date;
    vreme: Time;
    status: string;

    constructor(idZahteva:number,vrsta:string,datum: Date,vreme:Time,status:string) {
        this.idZahteva =idZahteva;
        this.vrsta=vrsta;
        this.vreme=vreme;
        this.status=status;
        }
}
