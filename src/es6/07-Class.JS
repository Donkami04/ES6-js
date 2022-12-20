class user {
    constructor(name){
        this.name = name;
    }
    // Metodos
    speak(){
        return 'Hellouuu';
    }
    greetin(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user ('Ana');
const fred = new user ('Fred');
const val = new user ('Valen');

console.log(val.greetin());

// ////////////////////////////////////////////////

let string = "papasito como estas";
console.log(string.padStart(30, "hi"));
console.log(string.padEnd(7, "hi"));

//////



// Ahora se puede cambiar de un array a un objeto
const entries = [
    ["name", "Sime"],
    ["age", 30],
  ];
  console.log("Array original", entries);

  // Array original [ [ 'name', 'Sime' ], [ 'age', 30 ] ]

  console.log("Array transformado a object", Object.fromEntries(entries));

  // Array transformado a object { name: 'Sime', age: 30 }

  