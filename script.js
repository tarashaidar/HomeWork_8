////HomeWork from Roman Rodomansky//////
///#1
function recursion(n) {
    if (n >= 1) {
        console.log(n);
        recursion(n-1);
    }
    else if(n <= -1){
        console.log(n);
        recursion(n+1);
    }
    else{
        console.log(0);
        
    }  
}

console.log(recursion(5));



///#2
function createRandomString( length ) {
    var str = "";
    for ( let i = 0; i < length;i++  ){
    str += Math.random().toString( 36 ).substr( 2 )
    return str.substr( 0, length );
}
}

console.log(createRandomString(5));




///#3
function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    // if (allow_Number === `yes`) {
        
    // }
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random()*25+97)) 
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

console.log(generate_random_string(10));

////TASK #9 ///////
function getTaxlessSalary(salary) {
    let recieveTax =  salary*0.18;
    let armyTax =  salary*0.015;
    return {
        recieveTax,
        armyTax,
        generalTax: recieveTax + armyTax
    }
    
}

console.log(getTaxlessSalary(10000));



////TASK #10 ///////
function getRandomArrays(start,end) {
    let arrays = [];
    while (start <= end) {
        arrays.push(Math.floor(Math.random()*(end - start) + start));
        start++;
    }
    return arrays;
}

console.log(getRandomArrays(1, 15));

///or////

function getRandomArray(start, end, totalCount) {
    let arrays = [];
    for (let i = 0; i < totalCount; i++) {
        arrays.push(Math.floor(Math.random()*(end - start) + start))
    }
    return arrays;
    }

    console.log(getRandomArray(1, 100, 20));




///TASK #11 ///////

(function count() {
    array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

     array_elements.sort();
     ////after sorting//////
    //  ["a", "a", "a", "b", "b", "c", "c", "d", "e", "e", "f", "g", "h", "h", "h"]

    let current_letter = null;
    let numberofletter = 0;
    for (let i = 0; i < array_elements.length; i++) {
       if (array_elements[i] != current_letter) {
        if (numberofletter > 0) {
            console.log(current_letter,numberofletter );  
        } 
        current_letter = array_elements[i];
        numberofletter = 1;        
       }else{
        numberofletter++;
       }
        
    }
       
}());

///or///

function count(str) {
    const countObj = {};
    str.trim();
    const strBecomeArr = str.split('');
    strBecomeArr.forEach(letter => {
        if (!countObj[letter]) {
            countObj[letter] = 1;
        }else{
            countObj[letter] += 1;
        }

    });
    return countObj;
}

console.log(count('tarashaidar'));






///TASK #12 ///////
function median(...numbers){
let values = numbers.sort((a,b) => a - b);
if (values.length === 0 ) return 0;
let medianaKey = Math.floor(values.length/2);
console.log(values.length);

if (values.length % 2) {
    return values[medianaKey];
}else{
    return (values[medianaKey - 1] + values[medianaKey])/2;
}
}
console.log(median(1, 2, 3, 4));
console.log(median(1, 2, 3, 4, 5));





///TASK #13 ///////

function getModa(...numbers) {
    const frequency = {};
    numbers.forEach(number => {
        if (!frequency[number]) {
            frequency[number] = 1;
        }else frequency[number] += 1;
    });
    
    let max = -Infinity;
    let moda = '';
    for (let key in frequency) {
        if (frequency[key] > max) {
            max = frequency[key];
            moda = key;
        }
    }
    return moda;

}

console.log(getModa(1, 2, 2, 3, 4, 4, 4, 5));











