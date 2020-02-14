const order = document.querySelectorAll('.order');
const count = document.querySelector('#count');
let counter = 0;

order.forEach( function (currentBtn) {
    currentBtn.addEventListener('click',onClick);
})
function onClick(){
    counter ++;
    count.innerHTML = counter;
}

const orderNow = document.querySelectorAll('.orderNow');
const message = document.querySelector('#message');

orderNow.forEach( function (currentBtn) {
    currentBtn.addEventListener('click',reset);
})
function reset(){
    if(counter == 0){
        message.innerHTML = 'Greska!';
    } else {
        message.innerHTML = `Narucili ste ${counter} pica, ${getNowTime()}`;
        counter = 0;
        count.innerHTML = counter;
    }
}
function getNowTime(){
    let date = new Date();
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}