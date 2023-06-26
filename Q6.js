function searchTargetValue(arr){
   let  min = Math.min(...arr);
   let max = Math.max(...arr);
   let r;

    let target = 10;
    for( let i = min; i<max; i++){
        if(arr[i]==target){
           r = arr.indexOf(arr[i])

        }
            
        
        else{
            r = -1
        }
    }
    return r;

    
}

console.log(searchTargetValue([1,2,9,6,8]))