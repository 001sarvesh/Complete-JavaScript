// loops ----> iterations 
//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element)
}

for (let i = 0; i <=20; i++) {
    const element = i;
    for (let j = 0; j <=10; j++) {
        const el = j;
    }   
}

// break and continue
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        continue; // ek baar maaf kr do 
       // break;

    }
    console.log(`value of i is ${i}`)  
}

