// find max/min
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let num of arr){
        if(num>max){
            max = num;
        }
        else if(num<min){
            min = num;
        }
    }
    return {max, min};
}

console.log(findMaxMin([5,1,2,4,9]));