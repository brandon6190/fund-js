function isNegativeOrOdd(value) {
  if (value % 2 === 1 || value < 0) {
    return true;
  }
  return false;
}

function repeat(string, count) {
  let result = '';
  for (let i = count; i > 0; i -= 1) {
    result += string;
  }
  return result;
}

function reverseString(string) {
  let result = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }
  return result;
}

function reverseObject(object) {
  const myObject = {};
  for (const key in object) {
    myObject[object[key]] = key;
  }
  return myObject;
}

function isNumber(value) {
  if (typeof value === 'number') {
    return true;
  }
  return false;
}

function isArray(value) {
  if (Array.isArray(value)) {
    return true;
  }
  return false;
}

function isObject(value) {
  if (typeof value === 'object') {
    return true;
  }
  return false;
}

function isNull(value) {
  if (value === null) {
    return true;
  }
  return false;
}

function clone(value) {
  if (typeof value === 'object' && !Array.isArray(value)) {
    const shallowClone = JSON.parse(JSON.stringify(value));
    return shallowClone;
  } else if (Array.isArray(value)) {
    const shallowClone = value.slice();
    return shallowClone;
  }
  return 'Argument must be an array or object';
}

function size(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  }
  let count = 0;
  for (const key in collection) {
    count += 1;
  }
  return count;
}

function indexOf(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function drop(array, n) {
  const myArray = [...array];
  if (n === 0) {
    return myArray;
  }
  if (typeof n === 'undefined') {
    n = 1;
  }
  myArray.splice(0, n);
  return myArray;
}

function dropRight(array, n) {
  const myArray = [...array];
  if (n === 0) {
    return myArray;
  }
  if (typeof n === 'undefined') {
    n = 1;
  }
  myArray.reverse();
  myArray.splice(0, n);
  return myArray.reverse();
}

function take(array, n) {
  const myArray = [];
  if (typeof n === 'undefined') {
    return [array[0]];
  }
  if (n === 0) {
    return [];
  }
  if (n > array.length) {
    return [...array];
  }
  for (let i = 0; i < n; i += 1) {
    myArray.push(array[i]);
  }
  return myArray;
}

function difference(array1, array2) {
  const myArray1 = [...array1];
  const myArray2 = [...array2];

  for (let i = 0; i < myArray1.length; i += 1) {
    for (let k = 0; k < myArray2.length; k += 1) {
      if (myArray1[i] === myArray2[k]) {
        myArray1.splice(i, 1);
      } else {
        continue;
      }
    }
  }

  return myArray1;
}

function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

function forEachRight(array, callback) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const mapped = [];
  forEach(array, (element, index, arr) => {
    const updated = callback(element);
    mapped.push(updated);
  });
  return mapped;
}

function filter(collection, callback) {
  if (Array.isArray(collection)) {
    const passed = [];
    for (const value of collection) {
      if (callback(value)) {
        passed.push(value);
      }
    }
    return passed;
  }

  if (typeof collection === 'object' && !Array.isArray(collection)) {
    const passed = {};
    for (const key in collection) {
      if (callback(collection[key])) {
        passed[key] = collection[key];
      }
    }
    return passed;
  }
  return 'First argument must be an object or array';
}

function reject(collection, callback) {
  const myObj = {};

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i += 1) {
      const truthyOrFalsy = callback(collection[i]);

      if (truthyOrFalsy) {
        collection.splice(i, 1);
      }
    }
    return collection;
  }

  if (typeof collection === 'object' && !Array.isArray(collection)) {
    for (const key in collection) {
      const truthyOrFalsy = callback(collection[key]);

      if (!truthyOrFalsy) {
        myObj[key] = collection[key];
      }
    }

    return myObj;
  }
}

function pluck(array, key) {
  const myArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'object') {
      myArray.push(array[i][key]);
    }
  }
  return myArray;
}

module.exports = {
  isNegativeOrOdd,
  repeat,
  reverseString,
  reverseObject,
  isNumber,
  isArray,
  isObject,
  isNull,
  clone,
  size,
  indexOf,
  drop,
  dropRight,
  take,
  difference,
  forEach,
  forEachRight,
  map,
  filter,
  reject,
  pluck
};
