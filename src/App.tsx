import React from 'react';
import './App.css';

function App() {

  let anything: any;  // any type
  let thing: unknown;  // unknown type use instead of any type
  let name: string;
  let age: number | string; // union type age can be a number or a string

  age = 25; // age can be a number or a string
  age = '25';

  let print: (name: string) => never; // a function never returns nothing

  //define the printName function
  function printName(fn: (name: string) => void) { // a function void returns undefined
    fn("John was here"); //call the function sent as an argument (printToConsole)
  }

  //define the function printToConsole
  function printToConsole(s: string) {
    console.log(s);
  }

  //call the function printName. It takes a function with name: string arguments
  printName(printToConsole);

  let isStudent: boolean;
  let hobbies: string[];
  const role: [number, string] = [2, 'author']; // Tuple

  type Person = {
    name: string;
    age?: number; // ? = Optional
  };

  type XXX = {
    a: string;
    b: number;
  }

  interface APerson extends XXX {  //interface Person extends type XXX
    name: string;
    age?: number; // Optional
  }

  type XX = Person & { //intersection of type XX with interface Person
    a: string;
    b: string;
  }

  interface Guy extends Person { //interface Guy extends interface Person
    profession: string;
  }

  type X = {
    a: string;
    b: number;
  };

  type Y = X & { // Intersection Y type contains all the properties of X and the properties of Y
    c: string;
    d: number;
  }

  const y: Y = {
    a: 'a',
    b: 1,
    c: 'c',
    d: 2
  }

  const person: Person = {
    name: 'John',
  }

  let lotsOfPeople:Person[]; // Array of Person objects

  return (
    <div className="App">
      <p>Hello World!</p>

    </div>
  );
}

export default App;
