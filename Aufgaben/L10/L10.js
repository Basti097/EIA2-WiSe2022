//globale Variablen 
var done = 1;
var openTask = 2;
var inputDOM;
var button;
var todos;
var counter;
//Event- Listener
window.addEventListener("load", function () {
    inputDOM = document.querySelector("#inputTodo");
    button = document.querySelector("#addButton");
    todos = document.querySelector("#tasks");
    counter = document.querySelector("#totalTasks");
    button.addEventListener("click", function () {
        newTask(inputDOM.value);
    });
    refreshDOM();
});
//Array Todos
var tasks = [
    {
        text: "Pizza essen",
        check: false
    },
    {
        text: "EIA machen",
        check: true
    },
    {
        text: "chillen",
        check: false
    }
];
function refreshDOM() {
    todos.innerHTML = "";
    for (let index = 0; index < tasks.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + tasks[index].check + "'><i class='fas fa-check'></i></span>"
            + tasks[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            trashTask(index);
        });
        todos.appendChild(todo);
        const key = inputDOM.value;
        const storageValue = inputDOM.value;
        localStorage.setItem(key, storageValue);
    }
    counterRefresh();
}
function counterRefresh() {
    counter.innerHTML = tasks.length + " in total";
}
//Neue Aufgabe
function newTask(text) {
    if (inputDOM.value != "") {
        tasks.unshift({
            text: inputDOM.value,
            check: false
        });
        inputDOM.value = "";
        openTask++;
        refreshDOM();
    }
}
function toggleCheckState(index) {
    if (tasks[index].check == true) {
        tasks[index].check = false;
        done--;
        openTask++;
    }
    else if (tasks[index].check == false) {
        tasks[index].check = true;
        done++;
        openTask--;
    }
    refreshDOM();
}
//lösche task
function trashTask(index) {
    if (tasks[index].check == true) {
        done--;
    }
    else if (tasks[index].check == false) {
        openTask--;
    }
    tasks.splice(index, 1);
    refreshDOM();
}
//# sourceMappingURL=L10.js.map