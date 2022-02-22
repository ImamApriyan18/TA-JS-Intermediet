
console.log('------------- SOAL NOMOR 1 --------------')

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(Array) {
    let sum = 0;
    if(Array === Array[sum]){
        return sum
    } else {
    sum = Array.reduce((prevItem, currItem) => {
        return prevItem + currItem
    }, 0); {
        return sum
     } //console.log(sum);
    } 
}
//sumOfArray(arr2)
console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));



console.log('------------- SOAL NOMOR 2 --------------')

const avg1 = [1, 2, 3, 4, 5];
const avg2 = [0, 3, 1, 10, 22];
function countAboveAvg(Array, avg) {
    avg = sumOfArray(avg)/avg.length
    //console.log(avg)
    let value = 0;
    if (value > avg) {
        return value
    } else {
    for (let i = 0; i < Array.length ; i++){
        if (Array[i] > avg) {
            value++
            }
        }
    } return value
}
//console.log(countAboveAvg(arr2, avg2))

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);



console.log('------------- SOAL NOMOR 3 --------------')

const arr = [1, 2, 3, 4, 5];
function searchInArray(Array, num) {
    //var found = true;
    if (found) {
        return index
    } else {
        let tempArr = [];
    for (let i = 0; i < Array.length; i++) {
        tempArr.push(Array[i]);
    }
    for (let j = 0; j < tempArr.length; j++) {
        if (tempArr[j] === num) {
            var found = true;
           var index = j;
        }
     } if (found) {
            return `angka ditemukan pada index: ${index}`
        } else {
            return "angka tidak ditemukan"
        }
    } 
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


console.log('------------- SOAL NOMOR 4 --------------')

function trianglePattern(col, row) {
    if (col === 0) {
      return '';
    }
    let alphabet = '';
    for (let i = 0; i < row; i++) {
      if (i < col - 1) {
        alphabet += ' ';
      } else {
        alphabet += String.fromCharCode(64 + (row - col + (i - col) + 2));
      }
    }
    console.log(alphabet);
    col = col - 1;
    return trianglePattern(col, row);
  }

const first = 5;
const second = 3;
const third = 2;

console.log(trianglePattern(first, first));
console.log(trianglePattern(second, second));
console.log(trianglePattern(third, third));
