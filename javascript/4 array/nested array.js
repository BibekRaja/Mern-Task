



/* 

    make a collection of students with students having folling fileds/keys/properties
        - roll
        - name
        - courses // course can have multiple value for each student
            // course shuld have following fileds/keys/properties
                - name
                - price
                - duration
*/

let students = [{
    roll: 1,
    name: 'john',
    courses: {
        name: "Web",
        price: 1500,
        duration: '2 months'
    }
}]

console.log(students);