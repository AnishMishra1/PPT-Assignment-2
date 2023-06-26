function uniqueCandies(arr){
    let len2
    let first;
    let second;
    var result = [];
    let len = arr.length/2;

    for(let i=0; i<arr.length ; i++){
        first = arr[i];
        second = arr[i+1];
        if(first !== second){
            result.push(arr[i]);
            len2 = result.length


        }
    }
    if(len<len2){
        return len;
    }
    else{
        return len2
    }
    
    

}


console.log(uniqueCandies([1,1,2,2,3,3,3]));