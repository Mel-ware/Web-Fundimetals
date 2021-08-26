var testArr = [6,3,5,1,2,4]
var Num = 0;
var Sum = 0;

for(var i = 0; i < testArr.length; i++){
    Num = testArr[i];
    Sum += testArr[i];
    console.log("Num ", Num, ", Sum ", Sum);
}

for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);