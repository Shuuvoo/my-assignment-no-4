function canPay(changeArray, totalDue) {
const myTaka = changeArray
if(myTaka.length >= 0){
    return ' Please provide valid Array '
}

let sum = 0 ;

for(let i = 0; i < myTaka.length ; i++){
 sum = sum + myTaka[i];
}

if(sum >= totalDue){
    return true }

else{return false
}

}
// const myTaka = [ 2,3,4, ];
// let totalDue = 10 ;
// const result = canPay(myTaka, totalDue);
// console.log(result);

