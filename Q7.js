function Monotonic(arr){

   
    let count1 =1;
    let count2 =1;
    let n = arr.length

    for(let i=0; i<n;i++){
        if(arr[i+1]>=arr[i]){
            count1 = count1 +1;
        }

        if(count1 == n ){
                return true
    
             }

        if(arr[i+1]<=arr[i]){
            count2 = count2+1
        }

        if(count2 == n){
            return true

            }

       
    }
    return false
    
  
   
    
}

console.log(Monotonic([3,3,2,1]));