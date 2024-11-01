const cardNumberInp = document.querySelector('.card-number-input')
const cardNumberBox = document.querySelector('.card-number-box')
const cardHolderInp = document.querySelector('.card-holder-input')
const cardHolderName = document.querySelector('.card-holder-name')
const monthInp = document.querySelector('.month-input')
const expMonth = document.querySelector('.exp-month')
const yearInp = document.querySelector('.year-input')
const expYear = document.querySelector('.exp-year')
const cvvInp = document.querySelector('.cvv-input')
const cvvBox = document.querySelector('.cvv-box')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
console.log(cardNumberInp.value);



cardNumberInp.oninput = ()=>{
    cardNumberBox.innerHTML = cardNumberInp.value; 
}
cardHolderInp.oninput = ()=>{
    cardHolderName.innerHTML = cardHolderInp.value; 
}
monthInp.oninput = ()=>{
    expMonth.innerHTML = monthInp.value; 
}
yearInp.oninput = ()=>{
    expYear.innerHTML = yearInp.value; 
}
cvvInp.onmouseenter = ()=>{
    front.style.transform = 'perspective(1000px) rotateY(-180deg)' 
    back.style.transform = 'perspective(1000px) rotateY(0deg)' 
}
cvvInp.onmouseleave = ()=>{
    front.style.transform = 'perspective(1000px) rotateY(0deg)' 
    back.style.transform = 'perspective(1000px) rotateY(180deg)' 
}
cvvInp.oninput = ()=>{
    cvvBox.innerHTML = cvvInp.value; 
}