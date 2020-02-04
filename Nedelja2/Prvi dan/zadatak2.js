let cena = 1000;
let novac = 1000;
if (novac >= cena ){
    let stanje = novac - cena;
    console.log('Uspesno ste kupili proizvod, trenutno stanje: ' + stanje);
} else {
    console.log('Nemate dovoljno novca, trenutno stanje: ' + novac)
}