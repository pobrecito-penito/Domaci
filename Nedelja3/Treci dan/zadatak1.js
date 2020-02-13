function divisibleByFive(arr){
    let arr1 = [];
    for(let element of arr){
        if(element % 5 == 0){
            arr1.push(element);
        }
    }
    return arr1;
}
console.log(`${divisibleByFive([1,2,3,4,5,10,15,23,1,5])}`);