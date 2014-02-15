/**
 * Created by Justin on 2/14/14.
 */

//Switch Loops
//case always equals the parameter passed in so case=varName in this example

var varName = "afshin";

switch (varName)
{
    case "afshin": //if varName == afshin
    case "saeed": // else if
    case "larry": // else if
        alert('Hey'); // do this if one of first three conditions are true
        break; // break the loop

    default: // default is what happens if nothing ELSE is true
        alert('Default case');
        break;

}



// toFixed() method

var helloAll = 1432.832487234;
helloAll.toFixed(2); // Takes helloAll, converts it to a string, and removes all decimals besides 83 so 1432.83
helloAll.toFixed(3); // 1432.832




// The only allowed non alpha-numeric character in variable names "$"

var Get$ome = "Example of $";
console.log(Get$ome);

function $ () {
    return 5;
}
$(); // Calling the $ function




// Making variables global... Without them being outside a function

(function (){
    tryMe = "Sup doggy"; // Not putting var in front of variable
})();

(function (){
    console.log(tryMe);
})();



// A few new ECMAScript 5 array functions
// Page 248 of textbook

// forEach() loops through an array one elemnt at a time
// every() tests each array element against a condition and returns a boolean if every element passes
// some() tests each array element against a condition and returns a boolean if at least one element passes
// map() provides each array element to a function where it will be modified and returned, creating a new array.
// filter() tests array elements against a condition and returns only those elements that pass
// reduce() group an arrays elements into a single value



//Hoisting

var scope = 'global';

function checkScope() {
   console.log(scope); //undefined

    var scope = 'local';
    console.log(scope); // local
}
checkScope();
