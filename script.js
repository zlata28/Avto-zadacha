class Car{

    constructor(mark,model,year,speed,engine){
        this.mark = mark
        this.model = model
        this.year = year
        this.speed = 0
        this.engine = false
    }

    strad (){
        if(this.engine == true) return"Двигатель заведён"
        else{
        this.engine = true
        return this.engine  
        } 
    }

    stop(){
        if(this.engine == true) return"Двигатель заведён"
        else{
        this.engine = false
        return this.engine 
        }
    }

    speedUp(){
        if(this.speed < 300)this.speed++
    }

    speeDown(){
        if(this.speed > 0)this.speed--
    }

    printInfo(){
        stc = (`Марка: ${this.mark}<br>Модель: ${this.model}<br>Год:${this.year}<br>Скорость: ${this.speed}км/ч`)
    }

}



//     go(){
//         console.log(`${this.speed}speed `)
//     }
    
//     printInfo(){
//         console.log(`Марка: ${this.mark},Модель: ${this.model},Год выпуска:${this.year}`)
//     }


// const car1 = new Car('Toyota','Camry',2000)

// car1.go()
// car1.printInfo()


// let Car = class{

//     constructor(mark,model,year){
//         this.mark = mark
//         this.model = model
//         this.year = year
//     }


//     go(){
//         console.log(`${this.model} Врум-врум!`)
//     }
    
//     printInfo(){
//         console.log(`Марка: ${this.mark},Модель: ${this.model},Год выпуска:${this.year}`)
//     }
// }

// const car1 = new Car('Жигуль','7',1999)
// const car2 = new Car('Honda','Accord',2005)

// car1.go()
// car1.printInfo()

// car2.go()
// car2.printInfo()


//задание!!!
//Класс Собака
//       кличка
//       возраст
//       метод() выводит Гав-гав!
//Класс Доберман унаследовать от Собака
//поля унаследовать от Собака
//добавить поле:дресировка= true/faise
//переопределить метод() выводит Тяф-тяф!

//Решение
class Dog{

    constructor(name,age){
        this.name = name
        this.age = age
    }
    big(){
        console.log('Гав-гав');
    }
}

class Doberman extends Dog{
  
    constructor(name,age,traning){
        super(name, age)
        this.traning = traning
    }

    big(){
 //       super.big()
        console.log( "Тяф-тяф");
    }
}
let dog1 = new Doberman("Graf",7,true)
dog1.big()
