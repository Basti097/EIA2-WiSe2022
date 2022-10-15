/*
Aufgabe: L01 Zufallsgedicht
Name: Bastian Aberle
Matrikel: 271166
Datum: 15.10.2022
Quellen: -
*/

namespace randompoem {
    let subjekt: string[] = ["Peter", "Hans", "Georg", "Gertrud", "Uschi", "Sabine"];
    let praedikat: string[] = ["isst", "baut", "fährt", "geht", "schneidet", "trinkt"];
    let objekt: string[] = ["Pferde", "Blumen", "Hunde", "Gebäude", "Brocken", "Kräuter"];

    for (let _i: number = subjekt.length; _i > 0; _i--) {
        getVerse(subjekt, praedikat, objekt);
    }

    function getVerse(_subjektP: string[], _praedikatP: string[], _objektP: string[]): string {

        let rNumberS: number = Math.floor(Math.random() * subjekt.length);
        let rNumberP: number = Math.floor(Math.random() * praedikat.length);
        let rNumberO: number = Math.floor(Math.random() * objekt.length);

        let randomSubjekt: string[] = subjekt.splice(rNumberS, 1);
        let randomPraedikat: string[] = praedikat.splice(rNumberP, 1);
        let randomObjekt: string[] = objekt.splice(rNumberO, 1);

        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        console.log(subjekt);
        console.log(praedikat);
        console.log(objekt);
        return;
    }
}