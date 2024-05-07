const sr = document.querySelector('.square');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const text = document.querySelector('.p1');
const text2 = document.querySelector('.p2');

const fun1 = () => {
    console.log('czesc');
}


const test12 = () => {
    sr.style.backgroundColor='red'
    
}

const test13 = () => {
    sr.style.backgroundColor='blue'
    
}
const fun2 = () => {
    text.classList.add('show')
    text2.classList.toggle('show')
}

btn1.addEventListener('dblclick', fun1);
btn2.addEventListener('click', fun2);
sr.addEventListener('mouseover', test12 );
sr.addEventListener('mouseleave', test13 );