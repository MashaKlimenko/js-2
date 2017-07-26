// let i =1;
// do {
//     document.write(i);
//     document.write('<br>')
//     i++;
// } while (i < 10)


function print(text){
    document.write(text + '<br>');
}

function printArr(arr){
    print('Array size is:' + arr.length);
    for(var i = 0; i < arr.length; i++) {
        print(i + 1 + ' ' + arr[i] );
    }

}

function printArrV2(arr) {
    print('Array size is:' + arr.length);
    arr.forEach(function(el, i){
        print(i + 1 + ' ' + el);
    } );
}

function printDict(dict) {
    for( var key in dict) {
        print(dict[key]);
    }
}

let goodTitles = []; 

goodTitles.push('Mersedes GL 500');
goodTitles.push('BMV X6');
goodTitles.push('Tesla model X');

goodTitles[3] = 'zaz Lanos';

goodTitles.push('Audi TT');
 
printArrV2(goodTitles);

let prices = [60000, 90000, 150000, 10000, 50000];
printArrV2(prices);

printCarsAndPrices(goodTitles, prices);

function printCarsAndPrices(goodTitles, prices) {
    for(var i = 0; i <goodTitles.length; i++){
        print(goodTitles[i] + ': ' + prices[i]);
    }
}

//dictionary (можна записувати багато однотипних речей)
let cars = {};

cars['fastest'] = 'Tesla model X';
cars['cheapest'] = 'zaz Lanos';
cars['largest'] = 'Mersedes GL 500';

print('Fastest car is:' + cars['fastest']);
print(cars.length);
printDict(prices);

//object (властивості і дії)
let mb = {};

mb.title = 'Mersedes GL 500';
mb.price = 90000;
mb.discription = 'Cool car';
mb.color = 'Black';

function carRun (){
    print(this.title + ' is running!!!');
}

mb.run = carRun;

print(mb.discription);
mb.run(); 

//let mb = {};

mb.title = 'BMV X6';
mb.price = 150000;
mb.discription = 'Best car';
mb.color = 'White';

mb.run = function(){
    print(this.title + ' is running!!!');
}

let audi = {
    title: 'Audi TT',
    price: 50000,
    discription: 'Cabrio',
    color: 'Red',
    run:carRun
}
audi.run();

function Car(title, price, discription, color){
    this.title = title;
    this.price = price;
    this.discription = discription;
    this.color = color;
    this.run = function () {
        print(this.title + 'is running');
    };
    return this;
}

let zaz = new Car('Zaz Lanos', 10000, 'Everyday', 'Gray');

zaz.run();

class NewCar {
    constructor (title, price, discription, color){
    this.title = title;
    this.price = price;
    this.discription = discription;
    this.color = color;
    
    }
     run() {
        print(this.title + 'is running');
    };
    
}

let jr = new NewCar('JR Defender', 50000, 'Off-road', 'Silver');
jr.run();








