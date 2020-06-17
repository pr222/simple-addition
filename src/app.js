/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Ellen Nu <en999zz@student.lnu.se>
 * @version 1.0.0
 */

// Get the module "calc". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as calc from './calc.js'

// Call the function "addNumbers" in the calc module without
// any arguments and save the result in a new variable or constant.
const sum = calc.addNumbers()

// Print the result to the terminal (console).
console.log(sum)
