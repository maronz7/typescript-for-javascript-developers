export {};

const debugProfile = (name: string, age: number) => {
    console.log({name, age})
}

debugProfile('Ham', 43)

type Profile = Parameters<typeof debugProfile> //引数の型を返す

const profile: Profile = ['Gloria', 44]

debugProfile(...profile)


type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
