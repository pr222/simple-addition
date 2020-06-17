# LÖSNING

```js
// src/calc.js

export function addNumbers () {
  const firstNumber = 12
  const secondNumber = 30

  return firstNumber + secondNumber
}
```

Funktionen `addNumbers` i modulen `src/calc.js` ska returnera summan av två värden som representeras av de två konstanterna `firstNumber` och `secondNumber`. För att summera två tal används `+`-operatorn, t.ex. `13 + 5`. Det går även bra att använda variabler och konstanter med `+`-operatorn varför uttrycket `firstNumber + secondNumber` ger summan av konstanternas värden.

I satsen `return firstNumber + secondNumber` bestäms först värdet av uttrycket `firstNumber + secondNumber`, som blir `42`, innan uttryckets värde returneras. Värdet av uttrycket `firstNumber + secondNumber` behöver alltså __inte__ lagras i em variabel eller konstant innan värdet returneras.

```js
// src/app.js

import * as calc from './calc.js'

const sum = calc.addNumbers()

console.log(sum)
```

Modulen `src/app.js` ska kompletteras med ett anropa av funktionen `addNumbers` i modulen `src/calc.js`. Modulen `src/calc.js` importeras och modulobjektet ges namnet `calc`. Genom `calc` kan sedan `addNumbers` anropas.

Funktionen `addNumbers` har ingen parameterlista, vilket du kan se på de tomma parenteserna efter funktionens namn i koden överst. För att anropa funktionen använder du modulobjektet `calc`, namnet på funktionen och tomma parenteser, `calc.addNumbers()`.

Funktionen `addNumbers` returnerar ett värde, `42`, av typen Number. För att lagra returvärdet behöver en konstant, `sum`, (eller variabel deklarerad med `let`) skapas och tilldelas returvärdet. Tilldelningen sker med tilldelningsoperatorn `=`, och det som står till höger om operatorn görs först.

När returvärdet är sparat kan det användas vidare och detta fall skrivas ut i terminalfönstret med `console.log(sum)`.
