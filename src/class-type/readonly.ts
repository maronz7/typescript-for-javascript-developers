export {};

class VisaCard {

    constructor(readonly owner: string) {
    }
}

let myVisa = new VisaCard('ハムさん')
console.log(myVisa.owner)
// myVisa.owner = 'ベーコン'