/*const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(ArrayOfNumber) {
    let total = 0;
    let value = 0;
    let average = total/ArrayOfNumber.length;

    for (let i=0; i< ArrayOfNumber.length; i++){
        total += ArrayOfNumber[i];
        average = total/ArrayOfNumber.length;
    } for (let j = 0; j < ArrayOfNumber.length; j++){
        if (ArrayOfNumber[j] > average){
            value++
        }
    } return value
}
*/




function getAverage(ArrayOfNumber) {
    let sum = ArrayOfNumber.reduce((prevItem, currItem) => {
    return prevItem + currItem
    }, 0)
    let avr = sum/ArrayOfNumber.length
    let value = 0;
    for (let i = 0; i<ArrayOfNumber.length; i++){
        if (ArrayOfNumber[i] > avr){
            value++
        }
    } return value
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))