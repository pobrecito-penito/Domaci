function pica(r,cena) {
    let povrsina = Math.PI*(r**2);
    let rezultat = cena/povrsina;
    return `Cena pice po kvadratnom centimetru je ${rezultat}`;
}
let poruka = pica(5,1500);
console.log(poruka);
