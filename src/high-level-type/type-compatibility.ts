export {};

let fooCompatoble: any
let barCompatoble: string = 'Typescript'

console.log(typeof fooCompatoble)

fooCompatoble = barCompatoble

console.log(typeof fooCompatoble)


let fooInCompatoble: string
let barInCompatoble: number = 1

// fooInCompatoble = barInCompatoble

let fooString: string
let barString: string = 'string'

fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral

let fooNumber: number
let fooNumberLiteral: 1976 = 1976
fooNumber = fooNumberLiteral

interface Animal {
    age: number
    name: string
}

class Person {
    constructor(public age: number, public name: string) {}
}

let me: Animal
me = new Person(43, 'Ham')