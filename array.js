// function print2Darr(matrix){
//     for(let row of matrix){
//         console.log(row.join(' '));
//     }
// }
// print2Darr([
//     [1,2,3],
//     [4,2,3],
//     [1,2,7]
// ])

// function sumdiagonal(matrix){
//     let sum =0;
//     for(let i=0; i<matrix.length; i++){
//         console.log(matrix[i][i]);
//         sum += matrix[i][i];
//     }
//     return sum;
// }
// console.log(sumdiagonal([
//     [3,2,3],
//     [4,2,3],
//     [3,2,7]
// ]));


function sum2darr(matrix){
    let sum = 0;
    for(let row of matrix){
        // console.log(row);
        for(let num of row){
            // console.log(num);
            sum+=num;
        }
        
    }
    return sum;
}
console.log(sum2darr([
    [5,2,4],
    [4,8,9],
    [7,5,3]
]))