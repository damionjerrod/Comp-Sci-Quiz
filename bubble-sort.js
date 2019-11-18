let luckyNumbers = [10, 5, 15, 32, 100, 0];

//Sorts numbers in sequential order from lowest to highest
function bubbleSort(numArr) {
    let change;
    let eachItem = numArr.length - 1;
    let myArr = numArr;
    do {
        change = false;
        for (let i=0; i < eachItem; i++){
            if (myArr[i] > myArr[i+1]){
                let holder = myArr[i];
                myArr[i] = myArr[i+1];
                myArr[i+1] = holder;
                change = true;
            }
        }
        eachItem--;
    } while (change);
return myArr;
}

console.log(bubbleSort(luckyNumbers));