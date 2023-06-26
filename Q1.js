function  Maxsum(arr){
  var sum =0;
  let arr1 = arr.sort()
  for(let i =0;i<arr1.length; i=i+2){
   
      sum = sum +arr1[i];
  }
  return sum;

}
let arr= [1,3,4,2]
console.log(Maxsum(arr))

