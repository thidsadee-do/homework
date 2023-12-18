const root = document.querySelector('#root');

const sum = document.querySelector('.show-sum');

let total = 0;

function counter() {

function makeElement(tag, attr_n, attr_v, content) {
let output = document.createElement(tag);
output.setAttribute(attr_n, attr_v);
output.textContent = content;
return output;
}

const counter = makeElement('div', 'class', 'counter', '');
const btnInc = makeElement('button', 'class', 'btn-inc', '+');
const btnDec = makeElement('button', 'class', 'btn-dec', '-');
const btnClr = makeElement('button', 'class', 'btn-clr', '0');
const number = makeElement('h3', 'class', 'number', '0');
const btnDel = makeElement('button', 'class', 'btn-del', 'x');

let countNum = 0;

const updateCounter = (n) => {
if (countNum + n < 0) {
return;
}
countNum += n;
total += n;
number.textContent = countNum;
sum.textContent = `Sum = ${total}`;
}

const hdlDelCounter = (event) => {
console.log(event.target.closest('.counter'));
event.target.closest('.counter').remove();
};

btnInc.addEventListener('click', () => updateCounter(1));
btnDec.addEventListener('click', () => updateCounter(-1));
btnClr.addEventListener('click', () => updateCounter(-countNum));
btnDel.addEventListener('click', hdlDelCounter);

counter.append(btnInc, number, btnDec, btnClr, btnDel);
// counter.append(btnInc);
// counter.append(number);
// counter.append(btnDec);
// counter.append(btnClr);

return counter;
};

const hdlAddCounter = () => {
root.append(counter());
};

const Addbtn = document.querySelector('.addBtn');
Addbtn.addEventListener('click', hdlAddCounter);