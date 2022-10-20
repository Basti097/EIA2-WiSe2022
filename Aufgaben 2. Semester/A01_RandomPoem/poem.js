/*
Aufgabe: L01 Zufallsgedicht
Name: Bastian Aberle
Matrikel: 271166
Datum: 15.10.2022
Quellen: -
*/
var randompoem;
(function (randompoem) {
    let subjekt = ["Peter", "Hans", "Georg", "Gertrud", "Uschi", "Sabine"];
    let praedikat = ["isst", "baut", "fährt", "geht", "schneidet", "trinkt"];
    let objekt = ["Pferde", "Blumen", "Hunde", "Gebäude", "Brocken", "Kräuter"];
    for (let _i = subjekt.length; _i > 0; _i--) {
        getVerse(subjekt, praedikat, objekt);
    }
    function getVerse(_subjektP, _praedikatP, _objektP) {
        let rNumberS = Math.floor(Math.random() * subjekt.length);
        let rNumberP = Math.floor(Math.random() * praedikat.length);
        let rNumberO = Math.floor(Math.random() * objekt.length);
        let randomSubjekt = subjekt.splice(rNumberS, 1);
        let randomPraedikat = praedikat.splice(rNumberP, 1);
        let randomObjekt = objekt.splice(rNumberO, 1);
        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        return;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=poem.js.map