/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student-lnu.se>
 * @version 1.0.0
 */

// Get the module "calc". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as calc from './calc.js'
// Call the function "addNumbers" in the calc module without
// any arguments and save the result in a new variable or constant.
// TODO: Write your code here.
const result = calc.addNumbers()
// calc.addNumbers()
// Print the result to the terminal (console).
// TODO: Write your code here.
console.log(result)
console.log('And finally, it works...')
// console.log(calc)
