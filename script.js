class Car{

    constructor(mark,model,year,speed){
        this.mark = mark
        this.model = model
        this.year = year
        this.speed = speed
    }

    go(){
        console.log(`${this.speed}speed `)
    }
    
    printInfo(){
        console.log(`Марка: ${this.mark},Модель: ${this.model},Год выпуска:${this.year}`)
    }
}

const car1 = new Car('Toyota','Camry',2000)

car1.go()
car1.printInfo()