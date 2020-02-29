
let inputOpis = document.querySelector('#opis');
let inputIznos = document.querySelector('#iznos');
let potvrda = document.querySelector('#potvrda');
let listaPrihoda = document.querySelector('#lista-prihoda');
let listaRashoda = document.querySelector('#lista-rashoda');
let pUkupniPrihod = document.querySelector('#ukupni-prihod');
let pUkupniRashod = document.querySelector('#ukupni-rashod');
let pTrenutnoStanje = document.querySelector('#trenutno-stanje');
let unosi = [];
let counter = 0;

let opis = '';
inputOpis.addEventListener('input',(e) => {
    opis = e.target.value;
})

let iznos;
inputIznos.addEventListener('input', (e) => {
    iznos = parseInt(e.target.value);
})
let ukupnaZarada = 0;
let ukupniTroskovi = 0;

let dodajNaListu = () => {
    if(opis.trim() == '' || iznos <= 0){
       alert('Pogresan unos!');
       inputIznos.value = '';
        inputOpis.value = '';
        iznos = 0;
        opis = '';
        return
    }

    
    let item = document.createElement('li');

    let budzet = document.querySelector('#budzet').value;
    let unos;
    switch(budzet) {
        case 'prihod': 
            item.innerText = ` ${opis}  ${iznos} `;
            listaPrihoda.appendChild(item);
            ukupnaZarada += iznos;
            unos = {
                id: counter,
                vrsta: 'prihod',
                opis: opis,
                iznos: iznos,
            }
            unosi.push(unos);
            pUkupniPrihod.innerHTML = ukupnaZarada;
            pUkupniRashod.innerHTML = ukupniTroskovi + ' (' + Math.floor(ukupniTroskovi/ukupnaZarada*100) + '%)';
            
            counter++;
            break;
        case 'rashod': 
        ukupniTroskovi += iznos;
            if(ukupnaZarada != 0){
                item.innerText = opis + ' ' + iznos + ' (' +  Math.floor(iznos/ukupnaZarada*100) + '%)';
                pUkupniRashod.innerHTML = ukupniTroskovi + ' (' + Math.floor(ukupniTroskovi/ukupnaZarada*100) + '%)';
            } else {
                item.innerText = opis + ' ' + iznos ;
                pUkupniRashod.innerHTML = ukupniTroskovi ;
            }
  
            listaRashoda.appendChild(item);
            unos = {
                id: counter,
                vrsta: 'rashod',
                opis: opis,
                iznos: iznos,
            }
            unosi.push(unos);
            
            counter++;
             break;
    }
    console.log(unosi);
    
    let dugmeObrisi = document.createElement('button');
    dugmeObrisi.className = 'obrisi';
    dugmeObrisi.innerText = 'Obrisi';
    dugmeObrisi.addEventListener('click',() => {
        item.remove();
        let index = unosi.findIndex ( (el) => {
            return el.id == unos.id;
        })
        unosi.splice(index,1);
        console.log(unosi);
        
        if(unos.vrsta == 'prihod'){
            ukupnaZarada -= unos.iznos;
        }else if(unos.vrsta == 'rashod'){
            ukupniTroskovi -= unos.iznos;
        }
        
        pUkupniPrihod.innerHTML = ukupnaZarada;
        if(ukupnaZarada != 0){
                pUkupniRashod.innerHTML = ukupniTroskovi + ' (' + Math.floor(ukupniTroskovi/ukupnaZarada*100) + '%)';
             } else {
                 pUkupniRashod.innerHTML = ukupniTroskovi ;
             }
        pTrenutnoStanje.innerHTML = ukupnaZarada - ukupniTroskovi;
    })
    
    item.addEventListener('mouseover', () => {
        item.appendChild(dugmeObrisi);
        dugmeObrisi.style.opacity = 1;
    })
    item.addEventListener('mouseout',() => {
        dugmeObrisi.style.opacity = 0;
    })
    
    pTrenutnoStanje.innerHTML = ukupnaZarada - ukupniTroskovi;
    inputIznos.value = '';
    inputOpis.value = '';
    iznos = 0;
    opis = '';
}
potvrda.addEventListener('click',dodajNaListu);