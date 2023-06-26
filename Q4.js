function noOfFlower(arr,n){
    let count = 0;
    for(let i =0; i<arr.length ; i++){
        if(arr[i] === 0 && (i===0 || arr[i-1] ===0) &&(i===arr.length-1 || arr[i+1]===0)){
            arr[i]=1
            count++


            if(count>= n){
                return true
            }
        }

       
    }
    return false;
}

console.log(noOfFlower([1,0,0,0,1],2));