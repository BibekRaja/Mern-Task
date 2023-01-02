

/* 

    print multiplcation of a digit for 

    8 100


     => 
     8 X 1 = 8
     8 X 2 = 16
*/
function multiplcation(num, itirate) {
    for (i = 1; i <= itirate; i++) {
        console.log(num + " x " + i + " = ", num * i);
    }
}
multiplcation(8, 12);