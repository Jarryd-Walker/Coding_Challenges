// 8 kyu - Filling an array (part 1)
const arr = N => {
  let a = []
  for(let i = 0; i < N; i++){
    a.push(i)
}
  return a
}
// 8 kyu - Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  return birds.filter(e => !geese.includes(e))
}
// 8 kyu - Well of Ideas - Easy Version
function well(x){
  let result = x.filter(e => e === 'good').length
  let answer
  if(result < 1){
    answer = 'Fail!'
  }else if(result > 2){
    answer = 'I smell a series!'
  }else{
    answer = 'Publish!'
  }
  return answer
}
// 8 kyu - I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    let arr = ['I love you','a little','a lot','passionately','madly','not at all']
  return arr[(nbPetals-1) % arr.length]
}
// 8 kyu - Sort and Star
function twoSort(s) {
  let arr = s.sort()
  return arr[0].split('').join('***')
}
// 8 kyu - Removing Elements
function removeEveryOther(arr){
  return arr.filter((_,i) => i % 2 === 0)
}
// 8 kyu - Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(e => e % divisor == 0)
}
// 8 kyu - My head is at the wrong end!
function fixTheMeerkat(arr) {
 return arr.reverse()
}
// 8 kyu - Sum Mixed Array
function sumMix(x){
  let arr = x.map(Number)
  return arr.reduce((a,b) => a + b)
}
// 8 kyu - Find the first non-consecutive number
function firstNonConsecutive (arr) {
  let temp = null
  let n = null
  let result = arr.forEach(e => {
    if(e !== temp + 1 && temp !== null){
      n = e
    }
    temp = e
  })
   return n
}
// 8 kyu - Even or Odd
function even_or_odd(number) {
  if (number % 2 === 0)
    return "Even"
  else
    return "Odd"
}
// 8 kyu - Opposite number
function opposite(number) {
  return(-number);
}
// 8 kyu - Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}
// 8 kyu - Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}
// 8 kyu - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump ? true : false;
};
// 8 kyu - Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if(n<0 || m<0){
    return 0;
  }
  else{
    return n * m;
  }
}
// 8 kyu - Get the mean of an array
function getAverage(marks){
  let length = marks.length
  let sum = marks.reduce((a,b) => a+b,0)
  let result = sum / length
  return Math.floor(result)
}
// 8 kyu - Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if(input == null || input == 0){return []}
  
  let p = 0
  let n = 0
  
  let arr = input.map((e,i) => {
      if (e > 0){
        p += 1
      }else{
        n += e
      }
    })
  return [p,n]
}
// 8 kyu - You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}
// 8 kyu - A Needle in the Haystack
function findNeedle(haystack) {
  let position = haystack.indexOf('needle')
  return `found the needle at position ${position}`
}
// 8 kyu - Abbreviate a Two Word Name
function abbrevName(name){
  return name.split(' ').map(e => e = e.slice(0,1).toUpperCase()).join('.')
}
// 8 kyu - Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
// 8 kyu - Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}
// 8 kyu - Function 1 - hello world
function greet() {
  return "hello world!";
}
// 8 kyu - Counting sheep...
function countSheeps(arrayOfSheep) {
  let result=0
  
 arrayOfSheep.forEach((e)=>{if(e) result++})
  return result
}
// 8 kyu - Remove String Spaces
function noSpace(x){return x.split(' ').join('')}
// 8 kyu - Grasshopper - Summation
var summation = function (num) {
let result = 0
for (i = 1; i <= num; i++) {
result += i

}
return result
}
// 8 kyu - Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => a - b);
    return args[0];
  }
}
// 8 kyu - String repeat
function repeatStr (n, s) {
  let string = ''
  for(let i = 0; i < n; i++) {
    string += s
  }
  return string;
}
// 8 kyu - Return Negative
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}
// 8 kyu - Sum of positive
function positiveSum(arr) {
  let arr2 = []
  arr.forEach(e => {
    if(e > 0){
      arr2.unshift(e)
    }
  }) 
  return arr2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
// 8 kyu - Reversed Strings
function solution(str){
  return str.split('').reverse().join('');  
}
// 8 kyu - Beginner - Lost Without a Map
function maps(x){
  return x.map(n => n * 2);
}
// 8 kyu - Fake Binary
function fakeBin(x){
  return x.split('').map(e => e < 5 ? 0 : 1).join('')
}
// 8 kyu - You only need one - Beginner
function check(a, x) {
  return a.includes(x,0) ? true : false
}
// 8 kyu - Sum Arrays
function sum (numbers) {
    "use strict";
    return numbers.length > 0 ? numbers.reduce((a,b) => a + b) : 0
};
// 8 kyu - Array plus array
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b)
}
// 8 kyu - Count the Monkeys!
function monkeyCount(n) {
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)  
  }
  return arr
}
// 8 kyu - Beginner - Reduce but Grow
function grow(x){
  return x.reduce((a,b) => a * b)
}
// 8 kyu - Sentence Smash
function smash (words) {
   return words.join(' ')
};
// 8 kyu - Convert a string to an array
function stringToArray(string){
  return string.split(' ')
}
// 8 kyu - Count by X
function countBy(x, n) {
  let z = [];
  for(let i = x; i <= n * x; i += x){
    z.push(i)
  }
  return z;
}
// 8 kyu - Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((a,b) => a + b) / nums.length
}
// 8 kyu - Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
  let arr = ages.sort((a,b) => a - b)
  return [arr[arr.length-1] - arr[0],arr.pop(),arr.shift()].reverse()
}
// 8 kyu - SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  return a.map(e => e ** 2).reduce((a,b) => a + b) > b.map(e => e ** 3).reduce((a,b) => a + b) ? true : false
}
// 8 kyu - Basic Training: Add item to an Array
websites.unshift("codewars")
// 8 kyu - Remove First and Last Character Part Two
function array(arr){
  let len = arr.split(',').length - 1
  if(arr.split(',').length < 3){
    return null
    }else{
      return arr.split(',').slice(1,len).join(' ')
  }
}
// 8 kyu - To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  return array.map(e => {
    if(Math.sqrt(e) % 1 === 0){
      return Math.sqrt(e)
    }else{
      return e * e
    }
  })
}
// 8 kyu - Printing Array elements with Comma delimiters
function printArray(array){
  return array.join(',')
}
// 8 kyu - Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2.filter((i) => arr1.indexOf(i) < 0)).sort((a,b) => a - b)
}
// 8 kyu - Swap Values
function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  return args
}
// 8 kyu - A wolf in sheep's clothing
function warnTheSheep(queue) {
  const wolfIndex = queue.reverse().indexOf('wolf',0)
  if(wolfIndex === 0){
    return "Pls go away and stop eating my sheep"
  }else{
    return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
  }
}
// 8 kyu - Vowel remover
function shortcut (string) {
  return string.replace(/[aeiou]/g,'')
}
// 8 kyu - Multiplication table for number
function multiTable(number) {
  let table = []
  for(let i = 1; i <= 10; i++){
    table.push(`${i} * ${number} = ${i * number}`)
  }
  return table.join('\n')
}
// 8 kyu - Stringy Strings
function stringy(size) {
  return ''.padStart(size, '10')
}
// 8 kyu - The Feast of Many Beasts
function feast(beast, dish) {
  return beast[0] == dish[0] && beast[beast.length -1] == dish[dish.length -1]
}
// 8 kyu - Do I get a bonus?
function bonusTime(salary, bonus) {
  return bonus == true ? `\u00A3${salary*10}` : `\u00A3${salary}`
}
// 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name[0] == 'r' || name[0] == 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}
// 8 kyu - DNA to RNA Conversion
function DNAtoRNA(dna) {
  return dna.replace(/T/g,'U')
}
// 8 kyu - Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}
// 8 kyu - Convert a Boolean to a String
function booleanToString(b){
  return b.toString()
}
// 8 kyu - Convert a String to a Number!
var stringToNumber = function(str){
  return Number(str)
}
// 8 kyu - Welcome to the City
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
// 8 kyu - Reversing Words in a String
function reverse(string){
  return string.split(' ').reverse().join(' ').trim()
}
// 8 kyu - Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
// 8 kyu - L1: Bartender, drinks!
function getDrinkByProfession(param){
  switch(param.toLowerCase()){
      case "jabroni":
        return "Patron Tequila"
      case "school counselor":
        return "Anything with Alcohol"
      case "programmer":
        return "Hipster Craft Beer"
      case "bike gang member":
        return "Moonshine"
      case "politician":
        return "Your tax dollars"
      case "rapper":
        return  "Cristal"
      default:
        return  "Beer"
  }
}
// 8 kyu - Simple validation of a username with regex
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username) 
}
// 8 kyu - Alan Partridge II - Apple Turnover
function apple(x){
  return x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
// 8 kyu - Palindrome Strings
function isPalindrome(line) {
  return line.toString().split('').reverse().join('') == line
}
// 8 kyu - Dollars and Cents
function formatMoney(amount){
  return '$' + parseFloat(amount).toFixed(2)
}
// 8 kyu - The Wide-Mouthed frog!
function mouthSize(animal) {
  if(animal.toLowerCase() == 'alligator'){
    return 'small'
  }else{
    return 'wide'
  }
}
// 8 kyu - Capitalization and Mutability
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
// 8 kyu - Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!"
}
// 8 kyu - Who is going to pay for the wall?
function whoIsPaying(name){
  return name.length > 2 ? [name, name[0] + name[1]] : [name] 
}
// 8 kyu - Is there a vowel in there?
function isVow(a){
  for (let i = 0; i < a.length; ++i){
    let char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char
  }
  return a
}
// 8 kyu - validate code with simple regex
function validateCode (code) {
  return /^[1-3]/.test(code);
}
// 8 kyu - Remove the time
function shortenToDate(longDate) {
  let shortDate = longDate.split(',')
  return shortDate[0]
}
// 8 kyu - No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
};
// 8 kyu - String cleaning
function stringClean(s){
  return s.replace(/[0-9]/g,'')
}
// 8 kyu - A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes('tree fiddy') || s.includes(3.50) || s.includes('three fifty') ? true : false
}
// 8 kyu - repeatIt
const repeatIt = (str,n) => typeof str == 'string' ? str.repeat(n) : 'Not a string'
// 8 kyu - String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
