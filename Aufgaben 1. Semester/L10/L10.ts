
//globale Variablen 

var done: number = 1;
var openTask: number = 2;
var inputDOM: HTMLInputElement;
var button: HTMLElement;
var todos: HTMLElement;
var counter: HTMLElement;


//Event- Listener
window.addEventListener("load", function (): void {
    inputDOM = document.querySelector("#inputTodo");
    button = document.querySelector("#addButton");
    todos = document.querySelector("#tasks");
    counter = document.querySelector("#totalTasks");
    button.addEventListener("click", function (): void {
        newTask(inputDOM.value);
    });

    
    refreshDOM();
});

//Interface fürs Array
interface TasksInterface {
    text: string;
    check: boolean;
}

//Array Todos
var tasks: TasksInterface[] = [
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


function refreshDOM(): void {
    todos.innerHTML = "";
    for (let index: number = 0; index < tasks.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + tasks[index].check + "'><i class='fas fa-check'></i></span>"
            + tasks[index].text +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            trashTask(index);
        });
        todos.appendChild(todo);
        const key: string = inputDOM.value;
        const storageValue: string = inputDOM.value;
        localStorage.setItem(key, storageValue);
    }
    counterRefresh();
}



function counterRefresh(): void {
    counter.innerHTML = tasks.length + " in total";
}

//Neue Aufgabe
function newTask(text: string): void {
    if (inputDOM.value != "") {
        tasks.unshift({
            text: inputDOM.value,
            check: false
        });
        inputDOM.value = "";
        openTask++;
        refreshDOM();
    }  }


function toggleCheckState(index: number): void {
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
function trashTask(index: number): void {

    if (tasks[index].check == true) {
        done--;
    }
    else if (tasks[index].check == false) {
        openTask--;
    }
    tasks.splice(index, 1);
    refreshDOM();
}



