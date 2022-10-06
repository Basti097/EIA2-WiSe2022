var eu;
(function (eu) {
    var deutschland = "Deutschland (2021): ";
    var frankreich = "Frankreich (2021): ";
    var italien = "Italien (2021): ";
    var dänemark = "Dänemark (2021): ";
    var deutschland_2008 = "Deutschland (2008-2021): ";
    var frankreich_2008 = "Frankreich (2008-2021): ";
    var italien_2008 = "Italien (2008-2021): ";
    var dänemark_2008 = "Dänemark (2008-2021): ";
    var textbefore_einwohner = "Gesamtzahl Einwohner*innen in ";
    var textbefore_rel = "Relation Einwohner*innen zur EU in ";
    var textbefore_growth = "Wachstumsrate Einwohner*innen in ";
    var textbefore_growthall = "Wachstumsrate (gesamt) zwischen 2008 und 2021 in ";
    var mio = " Mio.";
    var prozent = " %";
    var einwohner_ger = 83.16;
    var einwohner_fr = 67.44;
    var einwohner_it = 59.26;
    var einwohner_den = 5.84;
    var einwohner_ger2008 = 82;
    var einwohner_fr2008 = 62.14;
    var einwohner_it2008 = 59;
    var einwohner_den2008 = 5.48;
    var fläche_ger = 357.022;
    var fläche_fr = 643.801;
    var fläche_it = 301.340;
    var fläche_den = 43.094;
    var fläche_eu = 4233000;
    var multiplikator = 100;
    var einwohner_eu2008 = 497.7;
    var einwohner_eu = 447.1;
    window.addEventListener('load', function () {
        document.querySelector(".germany").addEventListener('click', clickgermany);
        document.querySelector(".italy").addEventListener('click', clickitaly);
        document.querySelector(".france").addEventListener('click', clickfrance);
        document.querySelector(".denmark").addEventListener('click', clickdenmark);
        document.querySelector(".stars").addEventListener('click', clickstars);
    });
    function clickgermany() {
        document.querySelector(".chart").setAttribute("style", "height:19%");
        document.querySelector("#einwohnerzahl").innerHTML = (einwohner_ger + mio);
        document.querySelector("#einwohnerzahl_text").innerHTML = "Gesamtzahl Einwohner*innen in Deutschland (2021)";
        document.querySelector("#relation").innerHTML = String(Math.round(einwohner_ger / einwohner_eu * multiplikator) + prozent);
        document.querySelector("#wachstumsrate").innerHTML = (((einwohner_ger - einwohner_ger2008) / einwohner_ger2008) * multiplikator).toFixed(2) + prozent;
        document.querySelector("#wachstumsrateges").innerHTML = ((einwohner_ger - einwohner_ger2008)).toFixed(2) + mio;
        document.querySelector("#überschrift1").innerHTML = "Einwohnerzahl in Deutschland";
        document.querySelector(".germany").setAttribute("style", "opacity:100");
    }
    ;
    function clickitaly() {
        document.querySelector(".chart").setAttribute("style", "height:15%");
        document.querySelector("#einwohnerzahl").innerHTML = (einwohner_ger + mio);
        document.querySelector("#einwohnerzahl_text").innerHTML = "Gesamtzahl Einwohner*innen in Italien (2021)";
        document.querySelector("#relation").innerHTML = String(Math.round(einwohner_it / einwohner_eu * multiplikator) + prozent);
        document.querySelector("#wachstumsrate").innerHTML = (((einwohner_it - einwohner_it2008) / einwohner_it2008) * multiplikator).toFixed(2) + prozent;
        document.querySelector("#wachstumsrateges").innerHTML = ((einwohner_it - einwohner_it2008)).toFixed(2) + mio;
        document.querySelector("#überschrift1").innerHTML = "Einwohnerzahl in Italien";
    }
    ;
    function clickfrance() {
        document.querySelector(".chart").setAttribute("style", "height:13%");
        document.querySelector("#einwohnerzahl").innerHTML = (einwohner_fr + mio);
        document.querySelector("#einwohnerzahl_text").innerHTML = "Gesamtzahl Einwohner*innen in Frankreich (2021)";
        document.querySelector("#relation").innerHTML = String(Math.round(einwohner_fr / einwohner_eu * multiplikator) + prozent);
        document.querySelector("#wachstumsrate").innerHTML = (((einwohner_fr - einwohner_fr2008) / einwohner_fr2008) * multiplikator).toFixed(2) + prozent;
        document.querySelector("#wachstumsrateges").innerHTML = ((einwohner_fr - einwohner_fr2008)).toFixed(2) + mio;
        document.querySelector("#überschrift1").innerHTML = "Einwohnerzahl in Frankreich";
    }
    function clickdenmark() {
        document.querySelector(".chart").setAttribute("style", "height:1%");
        document.querySelector("#einwohnerzahl").innerHTML = (einwohner_fr + mio);
        document.querySelector("#einwohnerzahl_text").innerHTML = "Gesamtzahl Einwohner*innen in Dänemark (2021)";
        document.querySelector("#relation").innerHTML = String(Math.round(einwohner_den / einwohner_eu * multiplikator) + prozent);
        document.querySelector("#wachstumsrate").innerHTML = (((einwohner_den - einwohner_den2008) / einwohner_den2008) * multiplikator).toFixed(2) + prozent;
        document.querySelector("#wachstumsrateges").innerHTML = ((einwohner_den - einwohner_den2008)).toFixed(2) + mio;
        document.querySelector("#überschrift1").innerHTML = "Einwohnerzahl in Dänemark";
    }
    function clickstars() {
        document.querySelector(".chart").setAttribute("style", "height:100%");
        document.querySelector("#einwohnerzahl").innerHTML = (einwohner_eu + mio);
        document.querySelector("#einwohnerzahl_text").innerHTML = "Gesamtzahl Einwohner*innen in der europäischen Union (2021)";
        document.querySelector("#relation").innerHTML = "-";
        document.querySelector("#wachstumsrate").innerHTML = (((einwohner_eu - einwohner_eu2008) / einwohner_eu2008) * multiplikator).toFixed(2) + prozent;
        document.querySelector("#wachstumsrateges").innerHTML = ((einwohner_eu - einwohner_eu2008)).toFixed(2) + mio;
        document.querySelector("#überschrift1").innerHTML = "Einwohnerzahl in der europäischen Union";
    }
})(eu || (eu = {}));
//# sourceMappingURL=eu.js.map