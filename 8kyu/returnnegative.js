function makeNegative(num){
  if(num <= 0){
    return num;
  }else{
    return -num;
  }
}

let makeNegative = (num) =>{
  return num < 0 ?num : -num; 
}

let makeNegative2 = num =>{
  return -Math.abs(num);
}

// num = 1  -1 × | 1 | = -1 × 1 =  -1
// num = -2  -1 × | -2 | = -1 × 2 = -2
// num = 0  -1 × | 0 | = -1 × 0 = 0