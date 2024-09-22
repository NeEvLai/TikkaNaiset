import Player from "./player.js"

// Suvi
const playerSuvi = new Player(6,"Suvi",0,0,0,0);
let totalPoints = playerSuvi.totalPoints();
let totalPenalties = playerSuvi.totalMinutes();

const buildSuvi = `
    <td>${playerSuvi.number}</td> <!-- Pelinumero -->
    <td>${playerSuvi.name}</td> <!-- Nimi -->
    <td>${playerSuvi.goals}</td> <!-- Maalit -->
    <td>${playerSuvi.passes}</td> <!-- Syötöt -->
    <td>${totalPoints}</td> <!-- Pisteet -->
    <td>${totalPenalties}</td> <!-- Jäähyt -->
    <td>${playerSuvi.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("suvi").innerHTML = buildSuvi;

// Elina
const playerElina = new Player(8,"Elina",0,0,0,0);
let totalPointsE = playerElina.totalPoints();
let totalPenaltiesE = playerElina.totalMinutes();

const buildElina = `
    <td>${playerElina.number}</td> <!-- Pelinumero -->
    <td>${playerElina.name}</td> <!-- Nimi -->
    <td>${playerElina.goals}</td> <!-- Maalit -->
    <td>${playerElina.passes}</td> <!-- Syötöt -->
    <td>${totalPointsE}</td> <!-- Pisteet -->
    <td>${totalPenaltiesE}</td> <!-- Jäähyt -->
    <td>${playerElina.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("elina").innerHTML = buildElina;

// Sofia
const playerSofia = new Player(12,"Sofia",0,0,0,0);
let totalPointsS = playerSofia.totalPoints();
let totalPenaltiesS = playerSofia.totalMinutes();

const buildSofia = `
    <td>${playerSofia.number}</td> <!-- Pelinumero -->
    <td>${playerSofia.name}</td> <!-- Nimi -->
    <td>${playerSofia.goals}</td> <!-- Maalit -->
    <td>${playerSofia.passes}</td> <!-- Syötöt -->
    <td>${totalPointsS}</td> <!-- Pisteet -->
    <td>${totalPenaltiesS}</td> <!-- Jäähyt -->
    <td>${playerSofia.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("sofia").innerHTML = buildSofia;

// Anniina
const playerAnniina = new Player(16,"Anniina",0,0,0,0);
let totalPointsAs = playerAnniina.totalPoints();
let totalPenaltiesAs = playerAnniina.totalMinutes();

const buildAnniina = `
    <td>${playerAnniina.number}</td> <!-- Pelinumero -->
    <td>${playerAnniina.name}</td> <!-- Nimi -->
    <td>${playerAnniina.goals}</td> <!-- Maalit -->
    <td>${playerAnniina.passes}</td> <!-- Syötöt -->
    <td>${totalPointsAs}</td> <!-- Pisteet -->
    <td>${totalPenaltiesAs}</td> <!-- Jäähyt -->
    <td>${playerElina.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("anniina").innerHTML = buildAnniina;

// Anni
const playerAnni = new Player(18,"Anni",0,0,0,0);
let totalPointsAk = playerAnni.totalPoints();
let totalPenaltiesAk = playerAnni.totalMinutes();

const buildAnni = `
    <td>${playerAnni.number}</td> <!-- Pelinumero -->
    <td>${playerAnni.name}</td> <!-- Nimi -->
    <td>${playerAnni.goals}</td> <!-- Maalit -->
    <td>${playerAnni.passes}</td> <!-- Syötöt -->
    <td>${totalPointsAk}</td> <!-- Pisteet -->
    <td>${totalPenaltiesAk}</td> <!-- Jäähyt -->
    <td>${playerAnni.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("anni").innerHTML = buildAnni;

// Nelli
const playerNelli = new Player(25,"Nelli",0,0,0,0);
let totalPointsN = playerNelli.totalPoints();
let totalPenaltiesN = playerNelli.totalMinutes();

const buildNelli = `
    <td>${playerNelli.number}</td> <!-- Pelinumero -->
    <td>${playerNelli.name}</td> <!-- Nimi -->
    <td>${playerNelli.goals}</td> <!-- Maalit -->
    <td>${playerNelli.passes}</td> <!-- Syötöt -->
    <td>${totalPointsN}</td> <!-- Pisteet -->
    <td>${totalPenaltiesN}</td> <!-- Jäähyt -->
    <td>${playerNelli.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("nelli").innerHTML = buildNelli;

// Maare
const playerMaare = new Player(36,"Maare",0,0,0,0);
let totalPointsM = playerMaare.totalPoints();
let totalPenaltiesM = playerMaare.totalMinutes();

const buildMaare = `
    <td>${playerMaare.number}</td> <!-- Pelinumero -->
    <td>${playerMaare.name}</td> <!-- Nimi -->
    <td>${playerMaare.goals}</td> <!-- Maalit -->
    <td>${playerMaare.passes}</td> <!-- Syötöt -->
    <td>${totalPointsM}</td> <!-- Pisteet -->
    <td>${totalPenaltiesM}</td> <!-- Jäähyt -->
    <td>${playerMaare.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("maare").innerHTML = buildMaare;

// Oona
const playerOona = new Player("x","Oona",0,0,0,0);
let totalPointsO = playerOona.totalPoints();
let totalPenaltiesO = playerOona.totalMinutes();

const buildOona = `
    <td>${playerOona.number}</td> <!-- Pelinumero -->
    <td>${playerOona.name}</td> <!-- Nimi -->
    <td>${playerOona.goals}</td> <!-- Maalit -->
    <td>${playerOona.passes}</td> <!-- Syötöt -->
    <td>${totalPointsO}</td> <!-- Pisteet -->
    <td>${totalPenaltiesO}</td> <!-- Jäähyt -->
    <td>${playerOona.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("oona").innerHTML = buildOona;

// Tilta
const playerTilta = new Player("x","Tilta",0,0,0,0);
let totalPointsT = playerTilta.totalPoints();
let totalPenaltiesT = playerTilta.totalMinutes();

const buildTilta = `
    <td>${playerTilta.number}</td> <!-- Pelinumero -->
    <td>${playerTilta.name}</td> <!-- Nimi -->
    <td>${playerTilta.goals}</td> <!-- Maalit -->
    <td>${playerTilta.passes}</td> <!-- Syötöt -->
    <td>${totalPointsT}</td> <!-- Pisteet -->
    <td>${totalPenaltiesT}</td> <!-- Jäähyt -->
    <td>${playerTilta.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("tilta").innerHTML = buildTilta;