


function vic(){
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
vic();