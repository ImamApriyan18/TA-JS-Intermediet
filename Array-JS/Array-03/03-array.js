const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, num) {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        for (let j = 0; j < number.length; j++) {
          //console.log(number[j]);
            tempArr.push(number[j]);
        }
    }

    for (let k = 0; k < tempArr.length; k++) {
      //console.log(tempArr[k]);
        if (tempArr[k] === num) {
            var found = true;
            var index = k;
        }
    }

    if (found) {
        return index;
    } else {
        return 'null';
    }
}
  //searchInArray(arr)
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));