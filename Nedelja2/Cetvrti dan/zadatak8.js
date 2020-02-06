let n = 5 ;
for (let i = n; i >= 1; i --){
    let x = ' '.repeat(i-1);
    x += '#'.repeat(6-i);
    console.log(x);
    }