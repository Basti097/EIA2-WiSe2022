/*
Aufgabe: L04 Shopping List - Data
Name: Bastian Aberle
Matrikel: 271166
Datum: 05.11.2022
Quellen: EIA2 - Videos, W3Schools
*/
var shoppinglistA04;
(function (shoppinglistA04) {
    //globale Variablen
    let item;
    let amount;
    let dateData;
    let comment;
    let nextPurchase;
    let amountItems = 0;
    //onload window Listener
    window.addEventListener("load", loadList);
    //lädt Liste und ruft loadData auf
    function loadList() {
        document.querySelector("h2").addEventListener("click", loadInput);
        loadData();
    }
    //lädt die Daten aus der data.ts in globale Variablen 
    function loadData() {
        for (let counter = 0; counter < shoppinglistA04.savedInputs.length; counter++) {
            item = shoppinglistA04.savedInputs[counter].savedItem;
            amount = shoppinglistA04.savedInputs[counter].savedAmount;
            dateData = shoppinglistA04.savedInputs[counter].savedDate;
            comment = shoppinglistA04.savedInputs[counter].savedComment;
            //umwandlung nextPurchase von boolean in string
            let nextPurchaseString = shoppinglistA04.savedInputs[counter].savedPurchase.toString();
            if (nextPurchaseString == "false") {
                nextPurchase = "";
            }
            else {
                nextPurchase = " buy";
            }
            //generiere nun einen neuen Eintrag in der Liste 
            loadItem();
        }
    }
    //Funktion zum laden der Daten von den Input Feldern -> in globale Variablen 
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        item = formData.get("Item").toString();
        amount = Number(formData.get("Amount"));
        dateData = new Date().toLocaleDateString();
        comment = formData.get("Area").toString();
        //umwandlung nextPurchase von Input in string
        let nextPurchaseString = formData.get("Checkbox");
        if (nextPurchaseString == null) {
            nextPurchase = "";
        }
        else {
            nextPurchase = " buy";
        }
        //generiere nun einen neuen Eintrag
        loadItem();
    }
    //Funktion zum Erstellen eines neuen Eintrags
    function loadItem() {
        //erstelle das div in dem das datum + anzahl + itemname + kommantar angezeigt wird 
        let newElement = document.createElement("div");
        newElement.innerHTML = dateData + " " + amount + " " + item + " " + comment + " " + nextPurchase;
        let getElement = document.querySelector("#output");
        getElement.appendChild(newElement);
        newElement.className = "outputItem" + amountItems;
        newElement.id = amountItems.toString();
        newElement.style.marginTop = "-10px";
        //erstelle neue Checkbox 
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "CheckboxName" + amountItems;
        getElement = document.querySelector("#output");
        getElement.appendChild(newCheckbox);
        newCheckbox.className = "checkbox" + amountItems;
        newCheckbox.id = "checkbox" + amountItems.toString();
        newCheckbox.name = "Checkbox" + amountItems.toString();
        //stylet erzeugte Elemente
        newCheckbox.style.position = "relative";
        newCheckbox.style.left = "-85px";
        newCheckbox.style.top = "-14px";
        //erstelle neues edit icon
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        getElement.appendChild(newEdit);
        newEdit.className = "edit" + amountItems;
        newEdit.id = "edit" + amountItems.toString();
        //stylet erzeugte Elemente
        newEdit.style.position = "relative";
        newEdit.style.top = "-41px";
        newEdit.style.width = "20px";
        newEdit.style.left = "165px";
        //erstelle neues trash icon
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='" + amountItems + "' " + "src='./trash-solid.svg'>";
        newElement.appendChild(newTrash);
        newTrash.className = "trash" + amountItems;
        //styled das erzeugte Element
        newTrash.style.width = "15px";
        newTrash.style.position = "relative";
        newTrash.style.left = "250px";
        newTrash.style.top = "7px";
        //listener
        document.querySelector(".trash" + amountItems).addEventListener("click", deleteItem);
        document.querySelector(".checkbox" + amountItems).addEventListener("click", checkboxNextPurchase);
        document.querySelector(".edit" + amountItems).addEventListener("click", editEntry);
        //zähle den Counter der Gesamtzahl der erzeugten Items um 1 hoch
        amountItems++;
    }
    //Funktion zum löschen eines Eintrags -> nimmt hier ID von dem jeweiligen Trash Element und löscht damit die zugehörigen Felder
    function deleteItem(_event) {
        console.log("delete");
        let x = _event.target.id;
        let outputElementId = document.getElementById(x);
        let editElementId = document.getElementById("edit" + x);
        let checkboxElementId = document.getElementById("checkbox" + x);
        checkboxElementId.remove();
        outputElementId.remove();
        editElementId.remove();
    }
    //Funktion zum überprüfen ob etwas gekauft wurde oder nicht (für die checkbox unten) <- Funktioniert noch nicht
    function checkboxNextPurchase(_event) {
        console.log("Checkbox Liste: Click -> checkboxNextPurchase()");
        //testing
        // let formData: FormData = new FormData(document.forms[0]);
        // let x: string = (_event.target as Element).id;
        // let nextPurchaseString: FormDataEntryValue = formData.get("Checkbox" + x);
        // console.log("nextP: " + nextPurchaseString);
        // let z = document.querySelector(".outputItem" + x).innerHTML;
        // document.querySelector(".outputItem" + x).innerHTML = z + " buy";
    }
    //Funktion zum editieren von Einträgen
    function editEntry() {
        console.log("Edit click -> editEntry()");
    }
})(shoppinglistA04 || (shoppinglistA04 = {}));
//# sourceMappingURL=script.js.map