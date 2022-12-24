interface CelestialBody {
  name: string
  mass: number
}

interface Star extends CelestialBody {
  age: number
  planets: planet[]
}

interface planet extends CelestialBody {
  population: number
  createSatellite: (name: string) => void
}

let sun: Star

sun.name = "sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

type Asteroid = CelestialBody & {
  size: number
}

class MilkyWayPlanet implements planet {
  name: string
  mass: number
  population: number

  constructor(name: string, mass: number, population: number) {
    this.name = name
    this.mass = mass
    this.population = population
  }

  createSatellite(name: string) {
    //...
  }
}

//Type acaba dando erro como duplicado, já que existe um type Asteroid
// type Asteroid = {
//   test: string
// }


// A interface não da erro, só implementa os valores dentro do planet
// interface planet {
//   satellites: string[]
// }