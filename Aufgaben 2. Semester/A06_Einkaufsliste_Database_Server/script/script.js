// *
// Aufgabe: L06 Shopping List - Server
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 20.11.2022
// Quellen: EIA2 - Videos, W3Schools, Lisa Blindenhöfer, Cindy Nugyen
// */
var shoppinglistA06;
(function (shoppinglistA06) {
    //onload eventlistener
    window.addEventListener("load", handleLoad);
    //holt dateien vom server, ruft loadData auf
    async function handleLoad() {
        let button = document.querySelector("button[id=but1]");
        let response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php/?command=find&collection=data");
        let entry = await response.text();
        let data = JSON.parse(entry);
        button.addEventListener("click", sendData);
        loadData(data);
    }
    //sendet den Eintrag auf den Server
    async function sendData() {
        let formData = new FormData(document.forms[0]);
        let json = {};
        //Umwandlung FormData in Json FormData
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        let newJSON = JSON.stringify(json);
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", newJSON);
        let response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php?" + query.toString());
        console.log("data sent");
        loadInput();
    }
    //lädt die Daten aus dem JSON Array in Variablen und gibt sie an loadItem weiter
    function loadData(newData) {
        let list = [];
        for (let num in newData.data) {
            list.push(num);
        }
        for (let index of list) {
            let item = newData.data[index].Item;
            let amount = newData.data[index].Amount;
            let date = newData.data[index].NewDate.toString();
            let comment = newData.data[index].Area;
            let purchaseCheckbox = newData.data[index].Checkbox;
            let purchase;
            if (purchaseCheckbox == "on") {
                purchase = " buy";
            }
            else {
                purchase = "";
            }
            loadItem(item, amount, comment, purchase, date, index);
        }
    }
    //lädt den Input in den Feldern in Variablen und übergibt es dann zur loadItem Funktion
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        let item = formData.get("Item").toString();
        let amount = formData.get("Amount").toString();
        let date = formData.get("NewDate").toString();
        let comment = formData.get("Area").toString();
        let index;
        //umwandlung nextPurchase von Input in string
        let purchaseCheckbox = formData.get("Checkbox");
        let purchase = "";
        if (purchaseCheckbox == null) {
            purchase = "";
        }
        else {
            purchase = " buy";
        }
        //generiere nun einen neuen Eintrag
        loadItem(item, amount, comment, purchase, date, index);
        //refresh die seite um änderungen direkt an den server zu übertragen
        window.open("./shoppinglist.html", "_self");
    }
    //Funktion zur generierung eines Item Felds im Output
    function loadItem(item, amount, comment, purchase, date, index) {
        let newDiv = document.createElement("div");
        newDiv.id = "createDiv";
        let parent = document.querySelector("#output");
        newDiv.className = "genoutput";
        newDiv.innerHTML = date + " " + amount + " " + item + " " + comment + " " + purchase;
        parent.appendChild(newDiv);
        let newContainer = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "Checkbox";
        newContainer.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);
        newEdit.addEventListener("click", function () {
            editItem(newDiv, item, amount, comment, date, index, newCheckbox);
        });
        newTrash.addEventListener("click", function () {
            deleteItem(newDiv, index);
        });
        newCheckbox.addEventListener("click", function () {
            updateDate(newDiv, index, item, amount, comment, date, purchase);
        });
    }
    //aktualisiert das Datum und erzeugt die Felder neu.
    async function updateDate(newDiv, index, item, amount, comment, date, purchase) {
        console.log("checkbox");
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var NewDate = year + "-" + month + "-" + day;
        newDiv.innerHTML = NewDate + " " + amount + " " + item + " " + comment + " " + purchase;
        let newContainer = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "Checkbox";
        newCheckbox.checked = true;
        newContainer.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);
        newEdit.addEventListener("click", function () {
            editItem(newDiv, item, amount, comment, date, index, newCheckbox);
        });
        newTrash.addEventListener("click", function () {
            deleteItem(newDiv, index);
        });
        newCheckbox.addEventListener("click", function () {
            updateDate(newDiv, index, item, amount, comment, date, purchase);
        });
        let json = { NewDate };
        let newJSON = JSON.stringify(json);
        let query = new URLSearchParams();
        query.set("command", "update");
        query.set("collection", "data");
        query.set("id", index);
        query.set("data", newJSON);
        let response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php?" + query.toString());
        console.log("data sent");
    }
    //löscht ein Item bei click auf trash
    async function deleteItem(newDiv, index) {
        newDiv.parentElement.removeChild(newDiv);
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", "data");
        query.set("id", index.toString());
        let response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php?" + query.toString());
        console.log("deletet");
    }
    //editiert ein Item bei click auf edit
    async function editItem(newDiv, item, amount, comment, date, index, newCheckbox) {
        let itemx = document.querySelector("input#inputx");
        itemx.value = item;
        let amountx = document.querySelector("input#amountx");
        amountx.value = amount.toString();
        let commentx = document.querySelector("input#commentx");
        commentx.value = comment;
        let datex = document.querySelector("input#datex");
        datex.value = date;
        deleteItem(newDiv, index);
    }
})(shoppinglistA06 || (shoppinglistA06 = {}));
//# sourceMappingURL=script.js.map