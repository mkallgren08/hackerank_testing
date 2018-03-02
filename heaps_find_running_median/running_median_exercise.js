process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    //console.log(n)
    var a = [];
    for(var a_i = 0; a_i < n; a_i++){
       a[a_i] = parseInt(readLine());
        if (a.length===1){
            let numout = a[0].toFixed(1)
            process.stdout.write(numout+"\n")
        } else {
            let sortedArr = bubbleSort(a)
            //console.log(sortedArr)
            let arrLen = sortedArr.length;
            if (arrLen%2 === 0){
                let a = sortedArr[arrLen/2];
                let b = sortedArr[arrLen/2-1];
                //console.log( a + " " + b);
                let res = parseFloat((a+b)/2).toFixed(1)
                process.stdout.write(res+"\n");
            } else {
                let res = sortedArr[(arrLen-1)/2].toFixed(1);
                process.stdout.write(res+"\n");
            }
    }
}
}

function bubbleSort(arr) {
    let sorted = false;
    
    while (!sorted){
        sorted = true;
        
        for (var i =0; i <arr.length;i++){
            if (arr[i] > arr[i+1]){
                sorted = false;
                let b = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=b;
            }
        }
    }
    
    return arr;
}