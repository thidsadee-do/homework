const root = document.querySelector('#root')

function makeElement(tag, attr_n, attr_v, Content) {
    let output = document.createElement(tag)
    output.setAttribute(attr_n, attr_v)
    output.textContent = Content
    return output
}

const counter = makeElement('div','class','counter', '')
const btnInc = makeElement('button','class','btn-inc','+')
const number = makeElement('h3','class','number','0')
const btnDec = makeElement('button','class','btn-dec','-')
const btnClr = makeElement('button','class','btn-clr','0')

let countNum = 0

function updateCounter(n) {
    if (countNum + n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}

btnInc.addEventListener('click', () => updateCounter(1) )
btnDec.addEventListener('click', () => updateCounter(-1) )
btnClr.addEventListener('click', () => updateCounter(-countNum) )

counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)

root.append(counter)