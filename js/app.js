


/* function vic(){
    let num = 0;
    let num2 = 0;
    let arr = new Array(3); 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(3); 
    }
    for (let row = 0, day = 1; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (day < 31) {
                arr[row][col] = day++;
            } else {
                arr[row][col] = day;
                day = 1;
            }
        }
    }
    for (let i = 0, j = 0; i < arr.length; i++, j++){
        num += arr[i][j];
        num2 += arr[i][arr.length-1-j];
    }
    console.log(num);
    console.log(num2);
    console.log(arr);
}
vic(); */

let arr= [1,1,1,0,-1,-1];
function plusMinus(arr) {
    // Write your code here
    let pos = 0
    let neg = 0
    let zero = 0;
    let x = arr.length;
    for (let i = 0; i < x; i++){
        if (arr[i] > 0) {
            pos++;
        }else if (arr[i] < 0){
            neg++;
        }else if (arr[i] == 0){
            zero++;
        }
    }
    pos = pos/x;
    neg = neg/x;
    zero = zero/x;
    console.log(x, Number.parseFloat(pos).toFixed(6), Number.parseFloat(neg).toFixed(6), Number.parseFloat(zero).toFixed(6));
    return x, Number.parseFloat(pos).toFixed(6), Number.parseFloat(neg).toFixed(6), Number.parseFloat(zero).toFixed(6);
}

plusMinus(arr);