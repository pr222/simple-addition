/**
 * Calc module.
 *
 * @module src/calc
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Returns the sum of two numbers.
 *
 * @returns {number} The number 42.
 */
export function addNumbers () {
  const firstNumber = 12
  const secondNumber = 30

  return firstNumber + secondNumber

  // // ALTERNATIVE SOLUTION
  // // A less good solution when the constant is created completely
  // // unnecessarily since its value is only used in the return statement.
  // const sum = firstNumber + secondNumber

  // return sum
}
