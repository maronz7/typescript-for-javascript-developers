export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
    ): number => {
        const bmi = weight / (height * height)
        if(printable) {
            console.log(bmi)
        }
        return bmi
    
    }
    // bmi(身長、体重、consoleに出力するかどうか)

    bmi(1.78,168,false)
