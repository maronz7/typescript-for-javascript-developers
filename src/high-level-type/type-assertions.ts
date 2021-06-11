export {};

let name: any = 'Ham'

// let length= name.length as number
// let length= (name as string).length
let length= <number>name.length

// length = 'foo'