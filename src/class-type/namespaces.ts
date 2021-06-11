export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name:string) {}
        }   
    }
    export namespace Osaka {
        export class Person {
            constructor(public name:string) {}
        }   
    }
}
const me = new Japanese.Tokyo.Person('ハムさん')
console.log(me.name)

const meOsaka = new Japanese.Osaka.Person('ハムやん')
console.log(meOsaka.name)

namespace English {

    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
            ){}
        }
        
    }
const mee = new English.Person('Ham', 'Jeorge', 'Frankle')
console.log(mee)