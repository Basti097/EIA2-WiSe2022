// *
// Aufgabe: L04 Shopping List - Data
// Name: Bastian Aberle
// Matrikel: 271166
// Datum: 05.11.2022
// Quellen: EIA2 - Videos, W3Schools
// */

// namespace shoppinglistA05 {

//     //globale Variablen
//     let item: string;
//     let amount: number;
//     let dateData: string;
//     let comment: string;
//     let nextPurchase: string;
//     let amountItems: number = 0;
//     let addToArray: boolean = false;

//     //onload window Listener
//     window.addEventListener("load", loadList);

//     //lädt Liste und ruft loadData auf
//     async function loadList(): Promise<void> {
//         console.log("KJksjbfkjsb dfk");
//         let response: Response = await fetch("data.json");
//         let entry: string = await response.text();
//         let savedInputs: Input[] = JSON.parse(entry);


//         document.querySelector("button").addEventListener("click", loadInput);
//         let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=submit]");
//         submit.addEventListener("click", sendSubmit);
//         loadData();


//     }

//     async function sendSubmit(_event: Event): Promise<void> {
//         console.log("submit");
//         let formData: FormData = new FormData(document.forms[0]);
//         let query: URLSearchParams = new URLSearchParams(<any>formData);
//         await fetch("shoppinglist.html?" + query.toString());
//         alert("Order sent");


//     }
//     //lädt die Daten aus der data.ts in globale Variablen 
//     function loadData(): void {
//         for (let counter: number = 0; counter < savedInputs.length; counter++) {
//             item = savedInputs[counter].savedItem;
//             amount = savedInputs[counter].savedAmount;
//             dateData = savedInputs[counter].savedDate;
//             comment = savedInputs[counter].savedComment;

//             //umwandlung nextPurchase von boolean in string
//             let nextPurchaseString: string = savedInputs[counter].savedPurchase.toString();
//             if (nextPurchaseString == "false") {
//                 nextPurchase = "";
//             } else {
//                 nextPurchase = " buy";
//             }
//             //generiere nun einen neuen Eintrag in der Liste 
//             loadItem();
//         }

//     }

//     //Funktion zum laden der Daten von den Input Feldern -> in globale Variablen 
//     function loadInput(): void {
//         addToArray = true;
//         let formData: FormData = new FormData(document.forms[0]);

//         item = formData.get("Item").toString();
//         amount = Number(formData.get("Amount"));
//         dateData = new Date().toLocaleDateString();
//         comment = formData.get("Area").toString();

//         //umwandlung nextPurchase von Input in string
//         let nextPurchaseString: FormDataEntryValue = formData.get("Checkbox");

//         if (nextPurchaseString == null) {
//             nextPurchase = "";
//         } else {
//             nextPurchase = " buy";
//         }
//         //generiere nun einen neuen Eintrag
//         loadItem();

//     }

//     //Funktion zum Erstellen eines neuen Eintrags
//     function loadItem(): void {

//         //erstelle das div in dem das datum + anzahl + itemname + kommantar angezeigt wird 
//         let newElement: HTMLDivElement = document.createElement("div");
//         newElement.innerHTML = dateData + " " + amount + " " + item + " " + comment + " " + nextPurchase;
//         let getElement: HTMLElement = document.querySelector("#output");
//         getElement.appendChild(newElement);
//         newElement.className = "outputItem" + amountItems;
//         newElement.id = amountItems.toString();
//         newElement.style.marginTop = "-10px";

//         //erstelle neue Checkbox 
//         let newCheckbox: HTMLInputElement = document.createElement("input");
//         newCheckbox.type = "checkbox";
//         newCheckbox.name = "CheckboxName" + amountItems;
//         getElement = document.querySelector("#output");
//         getElement.appendChild(newCheckbox);
//         newCheckbox.className = "checkbox" + amountItems;
//         newCheckbox.id = "checkbox" + amountItems.toString();
//         newCheckbox.name = "Checkbox" + amountItems.toString();
//         //stylet erzeugte Elemente
//         newCheckbox.style.position = "relative";
//         newCheckbox.style.left = "-85px";
//         newCheckbox.style.top = "-14px";


//         //erstelle neues edit icon
//         let newEdit: HTMLDivElement = document.createElement("div");
//         newEdit.innerHTML = "<img id=" + amountItems + "e" + " src='./pen-solid.svg'>";
//         getElement.appendChild(newEdit);
//         newEdit.className = "edit" + amountItems;
//         //stylet erzeugte Elemente
//         newEdit.style.position = "relative";
//         newEdit.style.top = "-35px";
//         newEdit.style.width = "20px";
//         newEdit.style.left = "165px";

//         //erstelle neues trash icon
//         let newTrash: HTMLDivElement = document.createElement("div");
//         newTrash.innerHTML = "<img id='" + amountItems + "' " + "src='./trash-solid.svg'>";
//         newElement.appendChild(newTrash);
//         newTrash.className = "trash" + amountItems;
//         //styled das erzeugte Element
//         newTrash.style.width = "15px";
//         newTrash.style.position = "relative";
//         newTrash.style.left = "250px";
//         newTrash.style.top = "7px";


//         //bedingung zum hinzufügen des Items in das Objekt
//         if (addToArray == true) {
//             console.log("ist true");
//             let savedItem = item;
//             let savedAmount = amount;
//             let savedComment = comment;
//             let savedDate = dateData;
//             let savedPurchase = true;


//             let inputArray = { savedItem, savedAmount, savedComment, savedDate, savedPurchase };

//             savedInputs.push(inputArray);
//             console.log(savedInputs);
//         }

//         //listener
//         document.querySelector(".trash" + amountItems).addEventListener("click", deleteItem);
//         document.querySelector(".checkbox" + amountItems).addEventListener("click", checkboxNextPurchase);
//         document.querySelector(".edit" + amountItems).addEventListener("click", editEntry);

//         //zähle den Counter der Gesamtzahl der erzeugten Items um 1 hoch
//         amountItems++;
//     }

//     //Funktion zum löschen eines Eintrags -> nimmt hier ID von dem jeweiligen Trash Element und löscht damit die zugehörigen Felder
//     function deleteItem(_event: MouseEvent): void {
//         console.log("delete");
//         let x: string = (_event.target as Element).id;
//         console.log(x);
//         let newX: number = Number(x);
//         let outputElementId: HTMLElement = document.getElementById(x);
//         let editElementId: HTMLElement = document.getElementById(x + "e");
//         let checkboxElementId: HTMLElement = document.getElementById("checkbox" + x);
//         savedInputs.splice(newX, 1);
//         console.log(savedInputs);
//         checkboxElementId.remove();
//         outputElementId.remove();
//         editElementId.remove();

//     }

//     //Funktion zum überprüfen ob etwas gekauft wurde oder nicht (für die checkbox unten) <- Funktioniert noch nicht richtig (boxen verziehen sich)
//     function checkboxNextPurchase(_event: MouseEvent): void {
//         console.log("Checkbox Liste: Click -> checkboxNextPurchase()");
//         // let formData: FormData = new FormData(document.forms[0]);
//         // let x: string = (_event.target as Element).id;
//         // x = x.slice(8, 9);
//         // let newX: number = Number(x);
//         // item = savedInputs[newX].savedItem;
//         // amount = savedInputs[newX].savedAmount;
//         // dateData = savedInputs[newX].savedDate;
//         // comment = savedInputs[newX].savedComment;

//         // let checkStatus: FormDataEntryValue = formData.get("Checkbox" + newX);

//         // if (checkStatus == null) {
//         //     document.querySelector(".outputItem" + newX).innerHTML = dateData + " " + amount + " " + item + " " + comment + " " + "buy";
//         // } else {
//         //     document.querySelector(".outputItem" + newX).innerHTML = dateData + " " + amount + " " + item + " " + comment;
//         // }





//     }

//     //Funktion zum editieren von Einträgen
//     function editEntry(_event: MouseEvent): void {
//         console.log("Edit click -> editEntry()");
//         let formData: FormData = new FormData(document.forms[0]);
//         let x: string = (_event.target as Element).id;
//         x = x.slice(0, 1);

//         let newX: number = Number(x);
//         console.log("newX:" + newX);

//         item = savedInputs[newX].savedItem;
//         amount = savedInputs[newX].savedAmount;
//         dateData = savedInputs[newX].savedDate;
//         comment = savedInputs[newX].savedComment;

//         document.getElementById("inputx").value = item;
//         document.getElementById("amountx").value = amount;
//         document.getElementById("commentx").value = comment;

//         //delete entry from list 
//         let outputElementId: HTMLElement = document.getElementById(newX);
//         let editElementId: HTMLElement = document.getElementById(newX + "e");
//         let checkboxElementId: HTMLElement = document.getElementById("checkbox" + newX);

//         checkboxElementId.remove();
//         outputElementId.remove();
//         editElementId.remove();
//         savedInputs.splice(newX, 1);
//         console.log(savedInputs);

//     }
// }