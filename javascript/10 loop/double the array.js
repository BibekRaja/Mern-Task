

let arr1 = [1, 2, 3, 4]

/* 
    code here

 */

console.log(arr1) // should print me [2,3,6,8]


/* 

    array functions
    
*/

j = arr1.length - 1;

function doubleTheArrey(arr1) {
    for (i = 0; i <= j; i++) {
        arr1[i] = arr1[i] * 2;

    }
    console.log(arr1)
}

// console.log(doubleTheArrey());
doubleTheArrey(arr1)