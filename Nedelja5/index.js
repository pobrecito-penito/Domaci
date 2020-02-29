let unosi = [];
let counter = 0;
let ukupniPrihod = 0;
let ukupniRashod = 0;
let trenutnoStanje = 0;

const dodajUnos = (vrsta,opis,iznos) => {
    let unos = { 
        id: counter,
        vrsta: vrsta,
        opis: opis,
        iznos: iznos
    }
    unosi.push(unos);
    counter++;

    switch(vrsta){
        case 'prihod':
            ukupniPrihod += iznos;
            break;
        case 'rashod':
            ukupniRashod += iznos;
            break;
    }
    trenutnoStanje = ukupniPrihod - ukupniRashod;
}

const ukloniUnos = (unos) => {
    let index = unosi.findIndex( (el) => {
        return el.id == unos.id;
    })
    unosi.splice(index,1);

    switch(unos.vrsta){
        case 'prihod':
            ukupniPrihod -= unos.iznos;
            trenutnoStanje = ukupniPrihod - ukupniRashod;
            break;
        case 'rashod':
            ukupniRashod -= unos.iznos;
            trenutnoStanje = ukupniPrihod - ukupniRashod;
            break;
    }
}

//-------------------------------------------------------//

const listaPrihoda = document.querySelector('#lista-prihoda');
const listaRashoda = document.querySelector('#lista-rashoda');
const pUkupniPrihod = document.querySelector('#ukupni-prihod');
const pUkupniRashod = document.querySelector('#ukupni-rashod');
const pTrenutnoStanje = document.querySelector('#trenutno-stanje');

const dodajNaListu = (unos) => {
    const unosContainer = document.createElement('div');
    
    const noviUnos = document.createElement('li');
    switch(unos.vrsta){
        case 'prihod':
            noviUnos.innerHTML = unos.iznos;
            break;
        case 'rashod':
            if(ukupniPrihod != 0){
                noviUnos.innerHTML = unos.iznos + ' (' + Math.round(unos.iznos/ukupniPrihod*100) + '%)'
            }else{
                noviUnos.innerHTML = unos.iznos
            }
            break;
    }

    const dugmeObrisi = document.createElement('button');
    dugmeObrisi.innerHTML = 'X';
    dugmeObrisi.className = 'obrisi';
    dugmeObrisi.addEventListener('click', () => {
        unosContainer.remove();
        ukloniUnos(unos);
        pUkupniPrihod.innerHTML = ukupniPrihod;
        if(ukupniPrihod != 0){
            pUkupniRashod.innerHTML = ukupniRashod + ' (' + Math.round(ukupniRashod/ukupniPrihod*100) + '%)';
        } else {
            pUkupniRashod.innerHTML = ukupniRashod; 
        }
        pTrenutnoStanje.innerHTML = trenutnoStanje;
    })

    noviUnos.addEventListener('mouseover', () => {
        noviUnos.appendChild(dugmeObrisi);
        dugmeObrisi.style.opacity = 1;
    })
    noviUnos.addEventListener('mouseout',() => {
        dugmeObrisi.style.opacity = 0;
    })

    unosContainer.appendChild(noviUnos);

    switch(unos.vrsta){
        case 'prihod':
            listaPrihoda.appendChild(unosContainer);
            break;
        case 'rashod':
            listaRashoda.appendChild(unosContainer);
            break;
    }

    pUkupniPrihod.innerHTML = ukupniPrihod;
    if(ukupniPrihod != 0){
        pUkupniRashod.innerHTML = ukupniRashod + ' (' + Math.round(ukupniRashod/ukupniPrihod*100) + '%)';
    } else {
        pUkupniRashod.innerHTML = ukupniRashod; 
    }
    pTrenutnoStanje.innerHTML = trenutnoStanje;
}

const dodajUnose = () => {
    listaPrihoda.innerHTML = '';
    listaRashoda.innerHTML = '';
    unosi.forEach( (element) => {
        dodajNaListu(element);
    })
}

//----------------------------------------------------------//

let dugmeDodaj = document.querySelector('#potvrda');
let izaberiVrstu = document.querySelector('#budzet');
let inputOpis = document.querySelector('#opis');
let inputIznos = document.querySelector('#iznos');

let vrsta = 'prihod';
izaberiVrstu.addEventListener('change', () => {
    vrsta = izaberiVrstu.value;
})
let opis = '';
inputOpis.addEventListener('input',(e) => {
    opis = e.target.value;
})
let iznos;
inputIznos.addEventListener('input', (e) => {
    iznos = parseInt(e.target.value);
})

dugmeDodaj.addEventListener('click',() => {
    if(opis.trim() == '' || iznos <= 0){
        alert('Pogresan unos!');
        inputIznos.value = '';
         inputOpis.value = '';
         iznos = 0;
         opis = '';
         return
    }

    dodajUnos(vrsta,opis,iznos);
    dodajUnose();

    inputIznos.value = '';
    inputOpis.value = '';
    iznos = 0;
    opis = '';
})