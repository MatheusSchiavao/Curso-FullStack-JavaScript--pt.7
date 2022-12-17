let literal: "Hello, World!"
let pi: 3.14159
const test = 5

// O tipo literal tem que seguir a risca os valores atriubidos a ele, caso contrário, dará erro.
// literal = "Hi, World!"
// pi = 3

let option: "Yes" | "No" | "Maybe" /// a barra em pé "|" é como se fosse "ou", assim vc pode declarar vários tipos para a variável

option = "Yes"

let option1: number | boolean

option1 = 2 /// Correto, o 2 se encaixa no tipo number
option1 = false /// Correto, o false se encaixa no tipo boolean
// option1 = "teste" /// Erro, option1 somente number ou boolean, a palavra teste é tipo string


// let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão" 

type planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let planet: planet

let homePlanet = planet

function checkPlanet(planet: planet) {
  if (planet === "Terra") {
    console.log("Estamos na terra")
  }
}

type greetingCallBack = (name: string) => void

function greet(callbackfn: greetingCallBack) {
  let name = "Matheus"

  callbackfn(name)
}