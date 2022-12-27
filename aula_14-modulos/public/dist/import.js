import * as lodash from "lodash";
let xwing = {
    name: "x-wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4
};
//lib lodash
//camelCase deixa as primeiras letras das palavras em maiúsculo 
console.log(lodash.camelCase(xwing.pilot));
//KebabCase separa as palavras com um traço
console.log(lodash.kebabCase(xwing.pilot));
