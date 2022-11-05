/*
Aufgabe: L03 Shopping List
Name: Bastian Aberle
Matrikel: 271166
Datum: 27.10.2022
unter Zusammenarbeit mit: Lisa Blindenhöfer, Marie Walter
*/
var shoppinglist;
(function (shoppinglist) {
    window.addEventListener("load", handleList);
    function handleList() {
        console.log(" Event: window onload, Lade die Liste");
        document.querySelector(".but").addEventListener("click", create);
        document.querySelector("#check").addEventListener("click", checkButton);
        document.querySelector("#check").addEventListener("click", checkButton);
        document.querySelector("#trash").addEventListener("click", deleteItem);
        document.querySelector("#item1").addEventListener("click", editItem);
    }
    function create() {
        console.log("Event: click button add item, create Data, create Amount, create Name");
    }
    function checkButton() {
        console.log("Event: click checkbox");
    }
    function deleteItem() {
        console.log("Event: click trash, -> löschen von item später möglich");
    }
    function editItem() {
        console.log("Event: click item, -> editieren später möglich");
    }
})(shoppinglist || (shoppinglist = {}));
//# sourceMappingURL=script.js.map