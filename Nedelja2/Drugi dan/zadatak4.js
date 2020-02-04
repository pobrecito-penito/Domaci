let j = 0;
for( let i = 0; i % 5 == 0; i += 5){
    console.log(i);
    j ++;
    if( j == 1000){
        break;
    }
}
