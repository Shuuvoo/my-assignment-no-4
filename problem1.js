

function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'Please provide a number ';
    }
    else if(number <= 0 ){
        return 'Please provide a positive number'
    }
    let result = number * number * number ;
    return result;
}
// const cube = cubeNumber(3);
// console.log(cube);


function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'Please provide a number ';
    }
    else if(number <= 0 ){
        return 'Please provide a positive number'
    }
    let result = number * number * number ;
    return result;

}
const cube1 = cubeNumber(4);


console.log(cube1);


