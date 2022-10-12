let subjekt = ["Peter", "Hans", "Georg", "Gertrud", "Uschi", "Sabine"];
let praedikat = ["isst", "baut", "fährt", "geht", "schneidet", "trinkt"];
let objekt = ["Pferde", "Blumen", "Hunde", "Gebäude", "Brocken", "Kräuter"];
for (let _i = subjekt.length; _i > 0; _i--) {
    getVerse(subjekt, praedikat, objekt);
}
function getVerse(_subjekt, _praedikat, _objekt) {
    let rNumberS = Math.floor(Math.random() * subjekt.length);
    let rNumberP = Math.floor(Math.random() * praedikat.length);
    let rNumberO = Math.floor(Math.random() * objekt.length);
    let randomSubjekt = _subjekt.splice(rNumberS, 1);
    let randomPraedikat = _praedikat.splice(rNumberP, 1);
    let randomObjekt = _objekt.splice(rNumberO, 1);
    console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
    return;
}
//# sourceMappingURL=poem.js.map