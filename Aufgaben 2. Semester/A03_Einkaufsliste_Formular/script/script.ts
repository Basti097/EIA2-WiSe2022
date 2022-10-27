namespace shoppinglist {

    window.addEventListener("load", handleList);

    function handleList(): void {
        console.log(" Event: window onload, Lade die Liste");
        document.querySelector(".but").addEventListener("click", create);
        document.querySelector("#check").addEventListener("click", checkButton);
        document.querySelector("#check").addEventListener("click", checkButton);
        document.querySelector("#trash").addEventListener("click", deleteItem);
        document.querySelector("#item1").addEventListener("click", editItem);
    }

    function create(): void {
        console.log("Event: click button add item, create Data, create Amount, create Name");
    }

    function checkButton(): void {
        console.log("Event: click checkbox");
    }

    function deleteItem(): void {
        console.log("Event: click trash, -> löschen von item später möglich");
    }

    function editItem(): void {
        console.log("Event: click item, -> editieren später möglich");
    }
}