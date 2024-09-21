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

// Anniina

// Anni

// Nelli

// Maare

// Oona

// Tilta