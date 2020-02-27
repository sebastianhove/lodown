'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Takes a value and returns it unchanged
 * 
 * @param: {Any Datatype} value: Can be any datatype. 
 * 
 * @return {Any Datatype}: Will be the same value as our input value
 */

function identity(value){
     return value;
 }
module.exports.identity = identity;

/**
 * typeof: takes a value and returns its data type
 * 
 * @param: {Any Datatype} value: Can be any datatype.
 * 
 * @return {string} string value: Will return a string value saying what Data type the value is
 */
 
function typeOf(value){
     if (typeof value === 'string'){
        return 'string';
    } else if (Array.isArray(value)){
        return 'array';
    } else if (typeof value === 'number'){
        return 'number';
    } else if (value === undefined){
        return 'undefined';
    } else if (typeof value === 'boolean'){
        return 'boolean';
    } else if (value === null){
        return 'null';
    } else if (typeof value === 'function'){
        return 'function';
    } else {
        return 'object';
    }
}

module.exports.typeOf = typeOf;
/**
 * first: returns a new shallow copy of an array sliced from the beginning to a length provided with the input
 * 
 * @param {array} array: value that is an array
 * @param {number} number: value that is a number 
 * 
 * @return {array} array: returns a shallow copy of array sliced to the input given
 */
 
function first(array, number){
    if(!Array.isArray(array) || number < 0) {
        return [];
    }
    if(number > array.length) return array;
    if(typeof number !== 'number') return array[0];
    return array.slice(0, number);
}

module.exports.first = first;  

/**
 * last: returns a new shallow copy of an array sliced from the number given to the end of the array
 * 
 * @param {array} array: value that is an array
 * @param {number} number: value that is a number
 * 
 * @return {array} array: returns a shallow copy of an array sliced to the input given
 */
function last(array, number) {
     if (!Array.isArray(array) || number < 0) return [];
     if (number >= array.length) return array;
     if (typeof number !== 'number') return array[array.length-1];

     return array.slice(array.length-number, array.length);
};

module.exports.last = last;

/**
 *  indexOf: function that returns the index value of the first occurence of the value given as a parameter
 * 
 * @param {array} array: value that is an array
 * @param {value} value: can be any data type that we're searching for
 * 
 * @return {number} value: returns the index value of the array that the input parameter was found 
 */
 
 function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if(array[i] === value) return i;
    } return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: function that returns true or false if an input value is found in the input array
 * 
 * @param {array} array: value that is an array
 * @param {value} value: can be any data type we're searching for
 * 
 * @return {boolean} true or false: returns true or false if the value is found or not 
 */
 
 function contains(array, value){
    let contain = (array.includes(value) ? true: false);
    return contain;
 }
 
module.exports.contains = contains;


/**
 * unique: function that returns a new array of all duplicate elements of input array removed
 * 
 * @param {array} array: value that is an array
 * 
 * @return {array} array: returns an array with duplicates from input array removed 
 */
 
function unique(array){
        var uniqueArray = [];
   for (let i = 0; i < array.length; i++){
       if(indexOf(uniqueArray, array[i]) === -1){
           uniqueArray.push(array[i]);
       }
   }
   return uniqueArray;
 };
 
module.exports.unique = unique;

/**
 * filter: function that returns a new array of all elements from input array that pass true for
 * the functions predicate test
 * 
 * @param {array} array: value that is an array
 * @param {function} func: value that is a function
 * 
 * @return {array} array: returns a new array with all values that passed the function test of true or false
 */

function filter(array, func){
      var filteredArray = [];
    for (let i = 0; i < array.length; i++){
       if (func(array[i], i, array)) {
           filteredArray.push(array[i]);
       }
    }   return filteredArray;
};

module.exports.filter = filter; 

/**
 * reject: returns a new array with all values of an input array that fail a function predicate test
 * 
 * @param {array} array: value that is an array
 * @param {function} func: value that is a function
 * 
 * @return {array} array: returns a new array with all values that failed the function test of true or false
 */
 
 function reject(array, func){
    var filterArray = filter(array, func);
    var rejectArray = [];
    for (let i = 0; i < array.length; i++){
        if(indexOf(filterArray, array[i]) === -1) {
            rejectArray.push(array[i]);
        }
    }
    return rejectArray;
 };
 
 module.exports.reject = reject;
 
 /**
  * partition: Calls a function for each element of the array, splitting it to two arrays, one containing
  * truthy values, the other containing falsy values from the function they passed through
  * 
 * @param {array} array: value that is an array
 * @param {function} func: value that is a function
 * 
 * return: array with two subarrays, one of truthy values, one of falsy values
  */
  
function partition(array, func){
    return [filter(array, func), reject(array, func)];
 };
 
 module.exports.partition = partition; 
 
 /**
  * map: function that calls a function for each element of an input array and returns a new Array with altered elements
  * 
  * @param {array or object} collection: value that is either an array or an object
  * @param {function} func: value that is a function
  * 
  * @return: {Array} array: return newArray with altered elements from input array
  */
  
function map(collection, func){
   let newArray = [];
   if(Array.isArray(collection)) {
    for(var i = 0; i < collection.length; i++) {
     newArray.push(func(collection[i], i, collection));
        }
    } else {
    for (let key in collection) {
     newArray.push(func(collection[key], key, collection));
        }
    } return newArray;
 }
 
 module.exports.map = map;

 /** Pluck: Return a new Array containing the value of the <property> for every element in the array
  * @param {Array} objArr: an array of objects
  * @param {String} prop: a string value within an object
  * @return {Array} array: return array with plucked valuescd lodown
  */

  function pluck(objArr, prop){
        var values = [];
    map(objArr, function(val, index, collec){
        values.push(val[prop]);
    }); 
    return values;
  }
 
 module.exports.pluck = pluck;
 
/** Every: A function that returns true if all of an arrays or object elements 
 * resolve to truthy, or false if even one element returns false. If <function> 
 * is not provided, return true if every element is truthy, otherwise return false
 * @param {Array or Object} collection: A collection that is an Array or Object
 * @param {Function} func: A call function that interacts with every element in the array or object
 * @return {boolean}true or false: Return true if element is collection
 * @return {boolean}true : Return true 
 */
  
  function every(collection, func){
    let tester = func || identity;
    for( let i = 0; i < collection.length;i++){
        if(!tester(collection[i])){
            return false;
        }
    }
    return true;
}

module.exports.every = every;

 /** Some: Function that returns true if even only one element in a collection 
  * returns to truthy, or false if all elemnts are falsy. If a function is not provided 
  * return true if at least one element is truthy, otherwise return false
 * @param {Array or Object} collection: A collection that is an Array or Object
 * @param {Function} func: A call function that interacts with every element in the array or object
 * @return {Boolean} true or false: returns true or false for function call
 */
 
 function some(collection, func) {
   if (typeof func !== 'function') { 
       for (let element of collection) {
           if (element) return true;
       }
        return false; 
   }
 let mapedArr = map(collection, (element, index, collection) => func(element, index, collection));
   for (let element of mapedArr) {
       if (element) return true;
   }
   return false;
}

module.exports.some = some;

/** Reduce: function that reduces an Array to a single value, executes a provided function for each value of the array
 * @param {Array} array: value that is an array 
 * @param {Function} func: function that will be applied to each value in the arary
 * @param {Value} seed: the incrementor value that will be applied to the beginning of the array (if no seed given, the first element of the array will be used as default)
 * @ return {Value} number: returns value number of seeds incrementation
 */
 
 function reduce(array, func, seed){
         let current = seed;
    if (current === undefined){
        current = array[0];
        for (let i = 1; i < array.length; i++){ 
            current = func(current, array[i], i); 
       }
        return current;
    }
    for (let i = 0; i < array.length; i++){
       current = func(current, array[i], i);
    }
    return current;
   }
   
module.exports.reduce = reduce; 

/** Extend: function that copies a second object and pastes it into the first object given. If the keys are the same in both objects, then only the value is updated.  
 * @param {Object} object: value that is an object
 * @param {Object} object: value that is an object
 * @return {Object} object: value that is an object
 */
 
 
function extend() {
    var args = arguments;
    for (let i = 1; i < args.length; i++) {
        for (let key in args[i]) {
            args[0][key] = args[i][key];
        }
    }
    return args[0];
}

module.exports.extend = extend;