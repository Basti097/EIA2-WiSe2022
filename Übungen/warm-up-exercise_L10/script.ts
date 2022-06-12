interface Persona {
    name: string;
    age: number;
    favfood: string;
    student: boolean;
}

var people: Persona[] = [
    {
        name: "Natan",
        age: 20,
        favfood: "Pommes",
        student: true
    },
    {
        name: "Marie",
        age: 21,
        favfood: "Chilli",
        student: true
    },
    {
        name: "Lisa",
        age: 20,
        favfood: "Lasagne",
        student: true
    }

];

for (let index: number = 0; index < people.length; index++) {
    console.log(people[index].name);
}

var numbers: number[] = [1, 4, 5, 8, 9, 11];
let x: number = 0;
for (let index: number = 0; index < numbers.length; index++) {
    x = x + numbers[index];
}
console.log(x);
