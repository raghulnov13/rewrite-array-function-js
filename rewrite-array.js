var a =[10, 30, 50, 20,60];


// push




// pop
function myPop(array){
    let newArray=[];

    for(let i=0; i<array.length-1; i++){
        newArray[i] = array[i];
    }

    return newArray;
}
a = myPop(a);
console.log(a);