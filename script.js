//Assigning the values using DOM

const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const counter = document.querySelector('.counter');
const value = document.querySelector('.value');

// assigning values for adding the number and subtracting the number
let addNum = 0;
let subNum = 0;

//Applying Event-Listener to the buttons
increaseBtn.addEventListener('click', () => {
    value.textContent = ++addNum;
    value.style.color = 'green';
});

resetBtn.addEventListener('click', () => {
    value.textContent = 0;
    value.style.color = 'black';
    addNum = 0;
    subNum = 0;
});

decreaseBtn.addEventListener('click', () => {
    value.textContent = --addNum;
    value.style.color = 'red';
});

