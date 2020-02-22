let pokemon1 = {
    ime: 'Charmander',
    vrsta: 'Vatreni',
    sposobnosti: ['plamen','solarna energija'],
    karakteristike: {napad: 64, odbrana: 58, brzina: 65}
}

let pokemon2 = {
    ime: 'Squirtle',
    vrsta: 'Vodeni',
    sposobnosti: ['bujica','kisa'],
    karakteristike: {napad: 48, odbrana: 65, brzina: 43}
}

let pokemon3 = {
    ime: 'Pikacu',
    vrsta: 'Elektricni',
    sposobnosti: ['staticki elektricitet','munja'],
    karakteristike: {napad: 55, odbrana: 30, brzina: 90}
}

let pokemon4 = {
    ime: 'Koffing',
    vrsta: 'Otrovni',
    sposobnosti: ['levitacija','gas','smrad'],
    karakteristike: {napad: 65, odbrana: 95, brzina: 35}
}

//ZADATAK 2
let pokemoni = [pokemon1,pokemon2,pokemon3,pokemon4];
let sposobnosti = (niz) => {
    let x = [];
    for(let element of niz){
        for(let el of element.sposobnosti){
        x.push(el);
    }
}
    return x;
}
console.log(sposobnosti(pokemoni));
console.log('---------------');

//ZADATAK 3
pokemoni.sort((a,b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina;
})
console.log(pokemoni);
console.log('-------------');

//ZADATAK 4
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
console.log(jacina(pokemoni));



