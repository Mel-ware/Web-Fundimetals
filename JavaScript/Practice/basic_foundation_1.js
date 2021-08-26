//All functions can be ran and tested on line 140 and beyond.

//I'll declare up front all the arrays i will be using along with these functions. 
//You can switch them around in the test runs if you'd like.
var array1 = [4,6,9,10];
var array2 = [2,16,6,1];
var array3 = [5,21,0,11,-4,80,-10000];
var array4 = [-3,-1,9,14,38,55,76]


function practice1() {        
    var newArray = [];       
    for (var i = 1; i <= 255; i++) {                
        newArray.push(i);        
    }
    console.log(newArray);
}

function practice2() {
    var sum = 0;
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    console.log(sum);
}

function practice3() {
    var sum = 0;
    for(var i = 1; i <= 5000; i++){
        if(i % 2 == 1){
            sum += i;
        }
    }
    console.log(sum);
}

function practice4(array) {
    var sum = 0;
    for(var i = 0; i <array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}

function practice5(high_array) {
    var highest = high_array[0];
    for(var i = 0; i <= high_array.length; i++){
        if(high_array[i] > highest){
            highest = high_array[i];
        }
    }
    console.log(highest);
}

function practice6(average_array) {
    var average = 0;
    for(var i = 0; i < average_array.length; i++){
        average += average_array[i];
    }
    console.log(average/average_array.length);
}

function practice7() {
    var odd_future = [];
    for(var i = 1; i <= 50; i++){
        if(i % 2 == 1){
            odd_future.push(i);
        }
    }
    console.log(odd_future);
}

function practice8(great_array, greatest) {
    var count = 0;
    for(var i = 0; i <great_array.length; i++){
        if(great_array[i] < greatest){
            count++;
        }
    }
    console.log(count);
}

function practice9(sqaure_array) {
    for(var i = 0; i < sqaure_array.length; i++){
        sqaure_array[i] = sqaure_array[i]*sqaure_array[i];
    }
    console.log(sqaure_array);
}

function practice10(positive_array) {
    for(var i = 0; i < positive_array.length; i++){
        if(positive_array[i] < 0){
            positive_array[i] = 0;
        }
    }
    console.log(positive_array);
}

function practice11(another_array) {
    var max = 0;
    var min = 0;
    var avg = 0;
    for(var i = 0; i < another_array.length; i++){
        if(max < another_array[i]){
            max = another_array[i];
        }
        if(min > another_array[i]){
            min = another_array[i];
        }
        avg += another_array[i];
    }
    console.log("Max: ", max);
    console.log("Min: ", min);
    console.log("Avg: ", avg/another_array.length);
}

function practice12(swap_array) {
    var swap = swap_array[0]
    swap_array[0] = swap_array[swap_array.length - 1];
    swap_array[swap_array.length - 1] = swap;
    console.log(swap_array);
}

function practice13(dojo_array) {
    for(var i = 0; i < dojo_array.length; i++){
        if(dojo_array[i] < 0){
            dojo_array[i] = "Dojo";
        }
    }
    console.log(dojo_array);
}



//I commented out the rest of the functions so that the answer wouldn't be all clustered up.
//Please feel free to run them all. :) 

//practice1();
//practice2();
//practice3();
//practice4(array1);
//practice5(array1);
//practice6(array2);
//practice7();
//practice8(array3, 30);
//practice9(array4);
//practice10(array3);
//practice11(array2);
//practice12(array4);
practice13(array4);