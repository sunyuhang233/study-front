let count = 0;
let width = 0;
const box = document.querySelector('.box');
const value = document.querySelector('#value');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');



btn1.addEventListener(('click'), function () { 
    count--;
    value.innerHTML = count;
    width -= 1;
    value.style.color = 'red';
})

btn2.addEventListener(('click'), function () { 
    count = 0;
    value.innerHTML = count;
    width = 0;
    value.style.color = 'black';
    box.style.width= '0%';
})

btn3.addEventListener(('click'), function () { 
    count++;
    value.innerHTML = count;
    width += 1;
    if (count > 0 || count < 10) { 
    value.style.color = 'gray';
    } 
    if (count > 10) { 
        value.style.color = 'green';
    }

    box.style.width= width + '%';


})
