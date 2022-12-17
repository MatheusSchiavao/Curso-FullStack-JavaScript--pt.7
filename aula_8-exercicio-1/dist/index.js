const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert('A nave ${spaceship.name} foi registrada. ');
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert('${member} não pode ser adicionado. Limite atingido.');
    }
    else {
        spaceship.crew.push(member);
        alert('${member} foi adicionado à tripulação da ${spaceship.name}');
    }
}
