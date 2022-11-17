// *
// Aufgabe: L05 Shopping List - Client
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 11.11.2022
// Quellen: EIA2 - Videos, W3Schools, Lisa Blindenhöfer
// */
var shoppinglistA05;
(function (shoppinglistA05) {
    window.addEventListener("load", handleLoad);
    //lädt Liste und ruft loadData auf
    async function handleLoad() {
        let button = document.querySelector("button[type=submit]");
        let response = await fetch("data.json");
        let entry = await response.text();
        let data = JSON.parse(entry);
        button.addEventListener("click", handleButton);
        // clearInputs();
        loadData(data);
    }
    //managed die Buttons
    function handleButton() {
        loadInput();
        sendData();
    }
    //client austausch
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
        query.set("command", "insert");
        query.set("collection", "data");
        query.set("data", JSON.stringify(json));
        let response = await fetch("https://webuser.hs-furtwangen.de/~aberleba/Database/index.php?" + query.toString());
        console.log(response);
        console.log("data sent");
    }
    //lädt die Daten aus dem JSON Array in Variablen und gibt sie an loadItem weiter
    function loadData(data) {
        for (let index = 0; index < data.length; index++) {
            let item = data[index].item;
            let amount = data[index].amount;
            let date = data[index].date;
            let comment = data[index].comment;
            let purchase = data[index].purchase;
            loadItem(item, amount, date, comment, purchase);
        }
    }
    //lädt den Input in den Feldern in Variablen und übergibt es dann zur loadItem Funktion
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        let item = formData.get("Item").toString();
        let amount = Number(formData.get("Amount"));
        let date = new Date().toLocaleDateString();
        let comment = formData.get("Area").toString();
        //umwandlung nextPurchase von Input in string
        let purchaseCheckbox = formData.get("Checkbox");
        let purchase = "";
        if (purchaseCheckbox == null) {
            purchase = "";
        }
        else {
            purchase = " buy";
        }
        //löscht Value von Inputs
        // clearInputs();
        //generiere nun einen neuen Eintrag
        loadItem(item, amount, date, comment, purchase);
    }
    //Funktion zur generierung eines Item Felds im Output
    function loadItem(item, amount, date, comment, purchase) {
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
        newContainer.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);
        newEdit.addEventListener("click", function () {
            editItem(newDiv, item, amount, comment);
        });
        newTrash.addEventListener("click", function () {
            deleteItem(newDiv);
        });
    }
    //löscht ein Item bei click auf trash
    function deleteItem(newDiv) {
        newDiv.parentElement.removeChild(newDiv);
    }
    //editiert ein Item bei click auf edit
    function editItem(newDiv, item, amount, comment) {
        let itemx = document.querySelector("input#inputx");
        itemx.value = item;
        let amountx = document.querySelector("input#amountx");
        amountx.value = amount.toString();
        let commentx = document.querySelector("input#commentx");
        commentx.value = comment;
        deleteItem(newDiv);
    }
    //cleared die Input Felder
    // function clearInputs(): void {
    //     let itemx: HTMLInputElement = document.querySelector("input#inputx");
    //     itemx.value = "";
    //     let amountx: HTMLInputElement = document.querySelector("input#amountx");
    //     amountx.value = "";
    //     let commentx: HTMLInputElement = document.querySelector("input#commentx");
    //     commentx.value = "";
    // }
})(shoppinglistA05 || (shoppinglistA05 = {}));
//# sourceMappingURL=script.js.map