let subjekt: string[] = ["Peter", "Hans", "Georg", "Gertrud", "Uschi", "Sabine"];
let praedikat: string[] = ["isst", "baut", "fährt", "geht", "schneidet", "trinkt"];
let objekt: string[] = ["Pferde", "Blumen", "Hunde", "Gebäude", "Brocken", "Kräuter"];

for (let _i: number = subjekt.length; _i > 0; _i--) {
    getVerse(subjekt, praedikat, objekt);
}

function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

    let rNumberS: number = Math.floor(Math.random() * subjekt.length);
    let rNumberP: number = Math.floor(Math.random() * praedikat.length);
    let rNumberO: number = Math.floor(Math.random() * objekt.length);

    let randomSubjekt: string[] = _subjekt.splice(rNumberS, 1);
    let randomPraedikat: string[] = _praedikat.splice(rNumberP, 1);
    let randomObjekt: string[] = _objekt.splice(rNumberO, 1);

    console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
    return;
} 