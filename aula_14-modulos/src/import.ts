import { spaceship } from "./export";
import * as lodash from "lodash"

interface BattleSpaceship extends spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: "x-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4
}


//lib lodash
//camelCase deixa as primeiras letras das palavras em maiúsculo 
console.log(lodash.camelCase(xwing.pilot))
//KebabCase separa as palavras com um traço
console.log(lodash.kebabCase(xwing.pilot))