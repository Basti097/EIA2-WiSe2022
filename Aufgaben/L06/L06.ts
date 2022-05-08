var deutschland: string="Deutschland (2021): ";
var frankreich: string="Frankreich (2021): ";
var italien: string="Italien (2021): ";
var dänemark: string="Dänemark (2021): ";

var deutschland_2008: string="Deutschland (2008-2021): ";
var frankreich_2008: string="Frankreich (2008-2021): ";
var italien_2008: string="Italien (2008-2021): ";
var dänemark_2008: string="Dänemark (2008-2021): ";

var textbefore_einwohner: string="Gesamtzahl Einwohner*innen in ";
var textbefore_rel: string="Relation Einwohner*innen zur EU in ";
var textbefore_growth: string="Wachstumsrate Einwohner*innen in ";
var textbefore_growthall: string="Wachstumsrate (gesamt) zwischen 2008 und 2021 in ";

var mio: string=" Mio.";
var prozent: string=" %";

var einwohner_ger: number=83.16;
var einwohner_fr: number=67.44;
var einwohner_it: number=59.26;
var einwohner_den: number=5.84;   

var einwohner_ger2008: number=82;
var einwohner_fr2008: number=62.14;
var einwohner_it2008: number=59;
var einwohner_den2008: number=5.48;

var fläche_ger: number=357.022;
var fläche_fr: number=643.801;
var fläche_it: number=301.340;
var fläche_den: number=43.094;

var fläche_eu: number=4233000;

var multiplikator: number=100;

var einwohner_eu: number=447.1;


console.log(textbefore_einwohner+deutschland+einwohner_ger+mio);
console.log(textbefore_rel+deutschland+einwohner_ger/einwohner_eu*multiplikator+prozent);
console.log(textbefore_growth+deutschland_2008+((einwohner_ger-einwohner_ger2008)/einwohner_ger2008)*multiplikator+prozent);
console.log(textbefore_growthall+"Deutschland: "+(einwohner_ger-einwohner_ger2008)+mio);

console.log(textbefore_einwohner+frankreich+einwohner_fr+mio);
console.log(textbefore_rel+frankreich+einwohner_fr/einwohner_eu*multiplikator+prozent);
console.log(textbefore_growth+frankreich_2008+((einwohner_fr-einwohner_fr2008)/einwohner_fr2008)*multiplikator+prozent);
console.log(textbefore_growthall+"Frankreich: "+(einwohner_fr-einwohner_fr2008)+mio);

console.log(textbefore_einwohner+italien+einwohner_it+mio);
console.log(textbefore_rel+italien+einwohner_it/einwohner_eu*multiplikator+prozent);
console.log(textbefore_growth+italien_2008+((einwohner_it-einwohner_it2008)/einwohner_it2008)*multiplikator+prozent);
console.log(textbefore_growthall+"Italien: "+(einwohner_it-einwohner_it2008)+mio);

console.log(textbefore_einwohner+dänemark+einwohner_den+mio);
console.log(textbefore_rel+dänemark+einwohner_den/einwohner_eu*multiplikator+prozent);
console.log(textbefore_growth+dänemark_2008+((einwohner_den-einwohner_den2008)/einwohner_den2008)*multiplikator+prozent);
console.log(textbefore_growthall+"Dänemark: "+(einwohner_den-einwohner_den2008)+mio);




