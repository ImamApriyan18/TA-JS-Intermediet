const arr = [1, 2, 3];

const arr2 = [8, 1, 5, 7];

function reverse(array){
    const newArr = array.slice().reverse()
    return newArr;
    //console.log(newArr);
};

//reverse(arr);
const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);