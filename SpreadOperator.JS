const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

////////////////////////////////

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [-5, -4, -3, -2, -1];
const arr6 = [];

for (i = 0; i < arr4.length; i++){
    arr6[i] = arr4[i]+arr5[i];
}

console.log(arr6);

