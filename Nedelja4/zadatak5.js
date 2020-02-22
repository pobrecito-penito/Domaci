let pokemon1 = {
    ime: 'Charmander',
    vrsta: 'Vatreni',
    sposobnosti: ['plamen','solarna energija'],
    karakteristike: {napad: 64, odbrana: 58, brzina: 65},
    slika: 'images/charmander.jpg'
}

let pokemon2 = {
    ime: 'Squirtle',
    vrsta: 'Vodeni',
    sposobnosti: ['bujica','kisa'],
    karakteristike: {napad: 48, odbrana: 65, brzina: 43},
    slika: 'images/squirtle.jpg'
}

let pokemon3 = {
    ime: 'Pikacu',
    vrsta: 'Elektricni',
    sposobnosti: ['staticki elektricitet','munja'],
    karakteristike: {napad: 55, odbrana: 30, brzina: 90},
    slika: 'images/pikachu.jpg'
}

let pokemon4 = {
    ime: 'Koffing',
    vrsta: 'Otrovni',
    sposobnosti: ['levitacija','gas','smrad'],
    karakteristike: {napad: 65, odbrana: 95, brzina: 35},
    slika: 'images/koffing.jpg'
}
let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4];


let ispis = document.querySelector('#ispis');

let dugmePrikaz = document.querySelector('#prikaz');

function prikaz () { 
    ispis.innerHTML = '';
    pokemoni.forEach( (el) => {
    let p = document.createElement('p');
    p.textContent = `Ime: ${el.ime}; Vrsta: ${el.vrsta}; 
    Sposobnosti: ${el.sposobnosti}; Karakteristike: 
    napad: ${el.karakteristike.napad} odbrana: ${el.karakteristike.odbrana}
    brzina: ${el.karakteristike.brzina}`;
    ispis.appendChild(p);
    let img = document.createElement('img');
    img.src = el.slika;
    ispis.appendChild(img);
}) }
dugmePrikaz.addEventListener('click', prikaz);


let dugmePobednik = document.querySelector('#pobednik');
let jacina = (niz) => {
    let napad = 0;
    let najjaci;
    for(let element of niz){
        if(element.karakteristike.napad > napad){
            napad = element.karakteristike.napad;
            najjaci = element;
        }
    }
    return najjaci;
}

let prikaziPobednika = () => {
    ispis.innerHTML = '';
    let najjaciPokemon = jacina(pokemoni);
    let p = document.createElement('p');
    p.textContent = `Ime: ${najjaciPokemon.ime}; Vrsta: ${najjaciPokemon.vrsta}; 
       Sposobnosti: ${najjaciPokemon.sposobnosti}; Karakteristike: 
       napad: ${najjaciPokemon.karakteristike.napad} odbrana: ${najjaciPokemon.karakteristike.odbrana}
       brzina: ${najjaciPokemon.karakteristike.brzina}`;
    ispis.appendChild(p);
    let img = document.createElement('img');
    img.src = najjaciPokemon.slika;
    ispis.appendChild(img);
}
dugmePobednik.addEventListener('click',prikaziPobednika);