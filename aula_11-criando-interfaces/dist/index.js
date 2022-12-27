let sun;
sun.name = "sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
class MilkyWayPlanet {
    name;
    mass;
    population;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        //...
    }
}
//Type acaba dando erro como duplicado, já que existe um type Asteroid
// type Asteroid = {
//   test: string
// }
// interface planet {
//   satellites: string[]
// }
