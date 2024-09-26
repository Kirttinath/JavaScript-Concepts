function findMissingNumber(inputArray, length) {
    let result = Math.floor((length + 1) * (length + 2) / 2);
    for (let i = 0; i < length; i++) result -= inputArray[i];
    return result;
   }
  
   let myArray = [1, 2, 3, 5];
   let missingNumber = findMissingNumber(myArray, myArray.length);
 console.log(missingNumber);