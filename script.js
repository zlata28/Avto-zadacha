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





// Задача: Создание класса "Автомобиль"

// Создайте класс "Автомобиль", который имеет следующие свойства и методы:

// 1. Свойства:
//    - Марка (например, "Toyota").
//    - Модель (например, "Camry").
//    - Год выпуска.
//    - Скорость (начально равна 0).
//    - Заведен ли двигатель (начально false).

// 2. Методы:
//    - завестиДвигатель(): Метод, который заводит двигатель автомобиля. Если двигатель уже заведен, вывести сообщение об этом. В противном случае, установить флаг "двигатель заведен" в true.
//    - выключитьДвигатель(): Метод, который выключает двигатель автомобиля. Если двигатель уже выключен, вывести сообщение об этом. В противном случае, установить флаг "двигатель заведен" в false.
//    - увеличитьСкорость(скорость): Метод, который увеличивает текущую скорость автомобиля на указанное значение "скорость". Если двигатель не заведен, вывести сообщение об этом.
//    - уменьшитьСкорость(скорость): Метод, который уменьшает текущую скорость автомобиля на указанное значение "скорость". Если двигатель не заведен, вывести сообщение об этом.
//    - отобразитьИнформацию(): Метод, который выводит в консоль информацию об автомобиле, включая марку, модель, год выпуска, текущую скорость и состояние двигателя.

// Создайте экземпляр класса "Автомобиль", выполните несколько действий с ним (заведите двигатель, увеличьте скорость, и т.д.) и отобразите информацию о нем.еопределить метод() выводит Тяф-Тяф!















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
// class Dog{

//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     big(){
//         console.log('Гав-гав');
//     }
// }

// class Doberman extends Dog{
  
//     constructor(name,age,traning){
//         super(name, age)
//         this.traning = traning
//     }

//     big(){
//  //       super.big()
//         console.log( "Тяф-тяф");
//     }
// }
// let dog1 = new Doberman("Graf",7,true)
// dog1.big()



// try{
//     console.log("это 1ый блок")
//    // lalala;
//     console.log("это 2ый блок")
// } catch(error){
//     console.error(error + "это 3 блок");
// }

// setTimeout(function() {
//     try {
//       noSuchVariable; // try..catch обрабатывает ошибку!
//     } catch {
//       alert( "ошибка поймана!" );
//     }
//   }, 1000);


// fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(e => console.log(e.message)); 


//async function()
// fetch('https://dummyjson.com/products/categories')
//     .then(res => res.json())
//     .then(console.log)