function logestHarmSubArr(nums){
    let map ={}
    let subMaxLen =0;

    for(let num of nums){
        if(map[num]){
            map[num] +=1
        }else{
            map[num]=1
        }
    }
        // 

        for(let num in map){
            num = parseInt(num)
            if(map[num+1]){
                subMaxLen = Math.max(subMaxLen,map[num]+map[num+1])
            }
        }
        return subMaxLen
    }



console.log(logestHarmSubArr([1,3,2,2,5,2,3,7]));