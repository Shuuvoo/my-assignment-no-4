function sortMaker(arr) {
    let arr1 = arr[0];
    let arr2 = arr[1];
    if(arr1 === arr2){
        return 'equal';
    }
    else if(arr1 && arr2 >0){
        if(arr1 > arr2){
            const big = [arr1 , arr2];
            return big;
        }
        else{
            const small = [arr2 , arr1 ];
            return small ;
        }
    }
    else{
        return 'invalid input'}
}
// const arrr = [3, 2];
// const resutl = sortMaker(arrr);
// console.log(resutl);

