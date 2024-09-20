function countPositivesSumNegatives(input) {
    const positiveCount = input.filter(num => num > 0).length; //число полож.чисел в массиве input
    const negativeCount = input.filter(num => num < 0); //отобразили массив отриц.чисел бывших в массиве input
    const summNegativeCount = negativeCount.reduce(function(prev,curr, 0) {
        return prev+curr;
    }
    if(input.length==0) { 
     return input 
    }
    else {
     let result = [positiveCount, summNegativeCoutn];
     return result
    }
  };
  
  let input = [-1, 2];
  
  console.log(countPositivesSumNegatives(input));