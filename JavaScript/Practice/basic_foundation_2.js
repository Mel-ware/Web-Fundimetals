var new_array1 = [-10,-5,0,5,10]

function test1(biggie) {
    for(var i = 0; i < biggie.length; i++){
        if(biggie[i] > 0){
            biggie[i] = "big";
        }
    }
    console.log(biggie);
}

function test2(returns) {
    var low = returns[0];
    var max = returns[0];
    for(var i = 0; i < returns.length; i++){
        if(low < returns[i]){
            low = returns[i];
        }
        if(max > returns[i]){
            max = returns[i];
        }
    }
    console.log(low);

}

//test1(new_array1);
test2(new_array1);