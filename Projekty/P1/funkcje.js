// test();

// function test() {
// console.log('hej');
// }


// const mojafunkcja = function() {
//     console.log("nowe hej");
// }
// mojafunkcja();

// function add(x,y) {
//     if (x<y) return 
//     console.log(x+y);
// }

// add(5,4);
// const head = document.querySelector('h1');
// head.addEventListener('click', function(){
//     alert('Klikniety');
// })

// function klik() {
//     console.log('Kliknięty');
// }
// head.addEventListener('click', klik);

// const funkcjaStrz=(imie, wiek) => {
//     console.log(`Mam na ${imie} i mam ${wiek}`);
// }
// funkcjaStrz('Anna', 20);

//nfn skrot do funkcji strzalkowej

// const dni = ['poniedzialek', 'wtorek', 'sroda']

// const liczby1 = (x,y,z) => {
//     console.log(x,y,z);
//     console.log(z.map(el => el*2));
// }
// liczby1(2,3,4);
// const imie = 'Anna';
// const zasieg = () => {
//     const imie = 'Jan';
//     console.log(`zmienna Imie wewnatrz funkcji ${imie}`);

// }
// zasieg()


// let celsius = 0;
// let temp = 0;

// const farhenhait= (x) => {
//      celsius = x;
//      temp = x * 1.8 + 32;
//     console.log(temp);
    

// }
// farhenhait(100);

// const num = 10;
// const numbers = [];
// for(let i=0; i<num ;i++)
// {
//     numbers.push(i)
// }

// const idk=(x) => {
//     if(x%3 === 0 && x != 0)
//     {
//         console.log(`${x} jest podzielne przez 3`);
//     }
//     else 
//     {
//         console.log(`${x} nie jest podzielne przez 3`);
//     }

// }
// numbers.forEach((x) => console.log(x));


const obliczodleglosc = (x1,y1,x2,y2) => {
    const odleglosc = Math.sqrt((Math.pow(x2-x1)) + (Math.pow(y2-y1)));
    console.log(odleglosc);
}

obliczodleglosc(1,1,2,3);
