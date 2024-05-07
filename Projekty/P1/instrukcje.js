// // const haslo = 'ab!c17dddddddd999999999999999dj';



// // if (haslo.length>=8 && haslo.length<20 && haslo.includes('!'))
// // {console.log('Hasło jest prawidłowe');
// // }
// // else if (haslo.length>=20)
// // {console.log('Hasło jest za długie');
// // }
// // else {
// //     console.log('Hasło jest prawidłowej długości');
// // }

// // const data = new Date().getDay();
// // if (data==1) {
// //     console.log('poniedziałek');}
// // else if (data == 2) {
// //     console.log('wtorek');}
// // else if (data == 3) {
// //     console.log('środa');}
// // else if (data == 4) {
// //     console.log('czwartek');}
// // else if (data == 5) {
// //     console.log('piątek');  }  

// // const x = 10;
// // const newx = x > 20 ? `wartość jest większa od ${x}` : `wartość jest mniejsza od ${x}` ;
// // console.log(newx);

// console.log('%cZadanie 1', 'font-size: 35px; color: purple');
// const color = 'niebieski';
// const newkolor = 'zielony' 
// if (color == newkolor)
// {
//     console.log('kolory są takie same');
// } 
// else {
//     console.log('kolory są różne');
// }
// console.log('%cZadanie 2', 'font-size: 35px; color: purple');
// const x = 200;
// const y = 80;

// if (x > y)
// {
//     console.log('x>y');
// }
// else if (x = y)
// {
//     console.log('x=y');
// }
// else if (x < y )
// {
//     console.log('x<y');
// }

// let pkt = 14;

// switch (pkt) {
//     case (pkt <= 12) :
//         console.log(2);
//         break;
//     case pkt >= 13 && pkt <= 14:
//         console.log(3);
//         break;
//     case pkt >= 15 && pkt <= 16:
//         console.log(3.5);  
//         break;
//     case pkt >= 17 && pkt <= 18:
//         console.log(4);  
//         break;
//     case pkt >= 19 && pkt <= 20:
//         console.log(4.5);  
//         break;
//     case pkt >= 21 && pkt <= 22:
//         console.log(5);  
//         break;
//         default:
//         console.log("Nie mozna uzyskac więcej punktów");             
// }
console.log('%cZadanie 4', 'font-size: 35px; color: purple');

const x  = 10;

let parzysta = x%2 == 0 ?  ` liczba ${x} jest parzysta` : `liczba ${x} nie jest parzysta`;

console.log(parzysta);

console.log('%cZadanie 5', 'font-size: 35px; color: purple');
const w = 50;
if (w >= 100)
{
    tekst='z>100';
}
else if (w < 100 && w > 35)
{
    tekst='x jest medianą';
}
else if (w <= 25)
{
    tekst='x jest mały';
}
console.log(tekst.toLocaleUpperCase());