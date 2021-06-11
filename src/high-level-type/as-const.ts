export {};

let name = 'Atsushi'

name = 'Ham'

let nicknake = 'Ham' as const
// nicknake = 'Hamtaro'

let profile = {
    name: 'Atsushi',
    height: 178
} as const

// const profile2 = {
//     name: 'Atsushi',
//     height: 178
// } 

// profile.name = 'Ham'
// profile.height = 180