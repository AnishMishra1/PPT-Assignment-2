function MaxProduct(arr){
    let pre =1;
    let ans =1;
    let suf = 1;

    const n = arr.length;
    for(let i=0; i<n;i++){
        if(pre == 0){
            pre =1
        }
        if(suf == 0){
            suf =1;
        }

        pre = pre*arr[i];
        suf =suf*arr[n-1-i]
        ans = Math.max(ans, Math.max(
            pre,suf))
    }
    return ans
}

console.log(MaxProduct([1,2,3]))