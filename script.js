// check prime or not
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(8));


// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("abcde"));


// find max min from array
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];

    for(let num of arr){
        if(num > max){
            max = num;
        }
        if(num < min) min = num
    }
    return {max , min}
}

console.log(findMaxMin([2,4,5,1,6,8,3]));


// Palindrom or not
function Palindrom(str){
    let reversed = str.split('').reverse().join('');
    if(str === reversed){
        console.log("The string is palindrom");
    }else{
        console.log("The string is not palindrom");
    }
}

Palindrom("madam");


// Filter even numbers from array
function filterArray(arr){
    return arr.filter(num => num%2 === 0);
}
console.log(filterArray([1,2,3,4,5,6,7,8]));


// count vowels in a string
function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let char of str){
        if(vowels.includes(char)) count++;
    }
    return count;
}

console.log(countVowels("Sajib"))

// sum of natural numbers
function sumNatural(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNatural(5));