//count odd numbers from1-20
for(var i = 1; i < 20; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}





//count from 1-5 and add them each loop. Add the number count together each time it runs through the loop
sum = 0;
for(var num = 1; num <= 5; num++){
    sum = sum + num;
    console.log("Num: ", num);
    console.log("Sum: ", sum);
}