// How Edabit Works
// very-easy
// https://edabit.com/challenge/ARr5tA458o2tC9FTN

function hello() {
  return "hello edabit.com";
}





//Find Number of Digits in Number
// https://edabit.com/challenge/yFJzLfYghz7ZtsyAN
// medium
function num_of_digits(num) {
/**
   * Returns the number of digits in an integer using iterative division.
   *
   * @param {number} num The integer number.
   * @returns {number} The count of digits.
   */

  // Handle the edge case for 0
  if (num === 0) {
    return 1;
  }

  let count = 0;
  // Start with the absolute value of the number.
  let currentNum = Math.abs(num);

  // Keep dividing by 10 until the number becomes 0.
  while (currentNum >= 1) {
    // Integer division (using Math.floor) or bitwise NOT (~~) is necessary
    // to discard the fractional part.
    currentNum = Math.floor(currentNum / 10);
    count++;
  }

  return count;
}





// How Much is True?
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// medium
/**
 * Counts the number of 'true' boolean values in an array using a simple for loop.
 * * @param {Array<boolean>} arr The input array of boolean values.
 * @returns {number} The count of true values.
 */
function countTrueBeginner(arr) {
  // 1. Initialize a counter variable.
  let trueCount = 0;

  // 2. Loop through every element of the array.
  for (let i = 0; i < arr.length; i++) {
    // 'arr[i]' is the current element.

    // 3. Check if the current element is strictly equal to 'true'.
    if (arr[i] === true) {
      // 4. If it is, increment the counter.
      trueCount++;
    }
  }

  // 5. Return the final count.
  return trueCount;
}





//Returning an "Add" Function
//https://edabit.com/challenge/xtv5ZT7xDsHyrshTq
// medium

function add(n) {
  /**
   * Creates a function that is "pre-set" to add a specific number (n).
   *
   * @param {number} n The fixed number to be added later.
   * @returns {function(number): number} A new addition function.
   */

  // This is the function that gets returned.
  // It takes one number, 'x', as its input.
  return function (x) {
    // This line performs the addition.
    // The inner function remembers the value of 'n' from the outer function.
    return x + n;
  };
}





//Buggy Code (Part 1)
//https://edabit.com/challenge/j7yQbF3J3rToHsDBP
// hard

function cubes(a) {
  return a ** 3;
}
//65xp





//How Many Days Between Two Dates
//https://edabit.com/challenge/3hdXjfJozQySRC3gE
// hard

/**
 *
 * @param {Date} date1 The starting date.
 * @param {Date} date2 The ending date.
 * @returns {number} The number of days between date1 and date2.
 */
function getDays(date1, date2) {
  // Define the number of milliseconds in one day
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  // We use Math.abs() to ensure a positive result, regardless of date order.
  const diffInTime = date2.getTime() - date1.getTime();

  // Convert the difference from milliseconds to days and return
  // Math.round() is used to handle potential minor time-zone differences
  // and ensure a whole number of days.
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

//105xp
