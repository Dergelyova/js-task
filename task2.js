//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}


//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  var mini = arr[0];
  var index = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
      index = i;
    }
  }
  if (toReturn === "value") {
    return mini;
  }
  return index;
}


// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  let i = queue.length - 1;
  if (queue[i] === "wolf"){
    return "Pls go away and stop eating my sheep";
  } 
  while (queue[i] !== "wolf") {
         i--;
         }
return "Oi! Sheep number " + (queue.length - i - 1) + "! You are about to be eaten by a wolf!"
}


// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  var y = [];
  for (i = 0; i <= x.length - 1; i++) y[i] = x[i] * 2;
  return y;
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) return arr[i + 1];
  }
  return null;
}
