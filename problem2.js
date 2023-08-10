function matchFinder( string1, string2 ){
    if( typeof string1  !== 'string'){
        return 'Please provive string'
    }
    if( typeof string2  !== 'string'){
        return 'Please provive string'
    }
    if(string1.toUpperCase() === string2.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}
// const string1 = 'Peter Parker' ;
// const string2 = 'pen';
// const result = matchFinder( string1, string2 );
// console.log(result);