// console.log("" + 1 + 0); // -1 str
// console.log("" - 1 + 0); // 1
// console.log(true + false); // 2
// console.log(6 / '3'); // 6
// console.log('2' * '3'); // 9px str
// console.log(4 + 5 + 'px'); // $45 str
// console.log('$' + 4 + 5); // 2 
// console.log('4' - 2); // NaN
// console.log('4px' - 2); // -9 5 str
// console.log(' -9  ' + 5); // -14
// console.log(' -9  ' - 5); // 1
// console.log( null + 1); // NaN
// console.log( undefined + 1); // -2
// console.log( ' \t \n' - 2); //10

// var a = '10';
// var b = 1;
// console.log(a - b + 1);
// console.log(a / b);

// Lesson 2, day 2
// var a = 0
// for(let i = 1; i<=10; i++) {
//     if(i%2 == 0){
//         // console.log(i)
//         a += i
//     }
// }
// console.log(a)

// var sum = 0;
// for(let i = 0; i <= 100; i++) {
//     if(i%2 == 0)
//     console.log(i);
//     sum = sum + i
// }

// and or not

// console.log(15&&14&&'')

// Lesson 3

// var sum = 0;

// for(let i = 0; i<=100; i++){
//     if(i%2== 1){
//         sum = sum + i
//     }
// }
// console.log(sum);

// let a = 7;

// console.log(++a);
// console.log(--a);
// console.log(a++);
// console.log(a--);
// console.log(a);

// let a = 'HotDay'
// let a= 'WarmDay'
// let a = 'ColdDay'

// if(a == 'HotDay'){
//     console.log('The weather can be hot today!')
// }else if(a == 'WarmDay'){
//     console.log('The weather can be warm today!')
// }
// else{
//     console.log('cold!')
// }

// Lesson 4 

// if((typeof a === 'number')){
//     console.log("This is Number")
// }
// else if((typeof a === 'string')){
//     console.log("This is String")
// }
// else if(typeof a === 'undefined'){
//     console.log("This is Undefined")
// }
// else{
//     console.log("This function or object or other!")
// }

// let a = false;
// console.log(typeof a);

// switch (typeof a) {
//     case 'string':
//         console.log("This is string")
//         break;

//     case 'number':
//         console.log("This is Number")
//         break;

//     case 'boolean':
//         console.log("This is boolean")
//         break;

//     default:
//         console.log("This isn't type")
//         break;
// }

// let a = "Hot day"
// let a = "Warm day"
// let a = "Cold day"

// switch (a) {

//     case "Hot day":
//         console.log("This is hotday")
    //     break;

    // case "Warm day":
    //     console.log("This is warm day")
    //     break;

    // case "Cold day":
    //     console.log("This is cold day")
    //     break;

    // default:
    //     console.log("another weather")
    //     break;
// }

let str = "Web Brain Academy";

// for (let i = 0; i<str.length; i++){
    if(str.length == 'W, B, A'){
        console.log("Found")
    }
    else{
        console.log("don't found")
    }
// }