export class Supplies {
    Id: number;
    IdDobavljaca: number;
    naziv: string;
    kolicina: number;
    datum: string;
    cena: number;


    constructor(Id:number,IdDobavljaca:number,naziv:string,kolicina:number, datum:string, cena:number) {
        this.Id = Id;
        this.IdDobavljaca =IdDobavljaca;
        this.naziv=naziv;
        this.kolicina=kolicina;
        this.datum = datum;
        this.cena = cena;
    }
}