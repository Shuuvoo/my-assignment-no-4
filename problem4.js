function findAddress(obj) {
    if(typeof obj !== 'object'){
        return 'please provide a valid object'
    }
    else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        return {street, house, society} ;
    }
}
const obj = {
    street:10,
    house:'15A',
    society:'Earth Perfect'
}
// const result =  findAddress(obj);
// console.log((result.street),(result.house),(result.society)) ;


function findAddress(obj1) {
    if(typeof obj1 !== 'object'){
        return 'please provide a valid object'
    }
    else{
        const street = obj1.street || '__';
        const house = obj1.house || '__';
        const society = obj1.society || '__';

        return {street, house, society} ;
    }
}
const obj1 = {
    street:10,
    society:'Earth Perfect'
}
const result1 =  findAddress(obj1);
console.log((result1.street),(result1.house),(result1.society)) ;


function findAddress(obj2) {
    if(typeof obj2 !== 'object'){
        return 'please provide a valid object'
    }
    else{
        const street = obj2.street || '__';
        const house = obj2.house || '__';
        const society = obj2.society || '__';

        return {street, house, society} ;
    }
}
const obj2 = {
    street:10,
    // house:'15A',
    // society:'Earth Perfect'
}
const result2 =  findAddress(obj2);
console.log((result2.street),(result2.house),(result2.society)) ;
