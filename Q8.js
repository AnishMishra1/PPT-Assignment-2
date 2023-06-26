function result(arr, k,o){
    let max = Math.max(...arr)
    let result;
    let n;
    let min = Math.min(...arr)
    
    
    for(let i = 0; i<k-1; i++){
        if(arr.length === 1){
            arr.push(i)
        }

        result = max - arr[i];

        if(result-o>0){
            n = result -o;
            if(arr[i]== min){
                arr[i] = arr[i]+n
            }
        }
        
    }
    return output = Math.max(...arr)-Math.min(...arr)
    
   
    }
   


console.log(result([10],1,0));