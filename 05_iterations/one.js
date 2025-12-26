// for
Array = [2, 5, 7, 8, 0, 8, 79, 90,]

for (let i = 0; i < Array.length; i++) {
    
    const k = i;
    if (k == 5) {
        //////console.log("5 is best number")
    }
    //////console.log(k)
}

for (let i = 0; i <= 10; i++) {

    ////console.log(`Outer Loop value: ${i}`)

    for (let j = 0; j <= 10; j++) {
       ////console.log(`Inner Loop value: ${j} inner loop ${i}`)
        
    }
    
}

let myArray = ["Flash", "Batman", "Superman"]
//console.log(myArray.length)

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element)
    
}

// break and continue
/* 
for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log("Detected 5")
        break
    }
   console.log(`value of index is ${index}`)
    
} */

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        console.log("Detected 5")
        continue
    }
   console.log(`value of index is ${index}`)
    
}