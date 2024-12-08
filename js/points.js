import Player from "./player.js"

// Suvi
const playerSuvi = new Player(29,"Suvi",1,4,1,3);
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
const playerElina = new Player(8,"Elina",7,8,2,3);
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
const playerSofia = new Player(12,"Sofia",3,2,0,2);
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
const playerAnniina = new Player(16,"Anniina",6,2,2,3);
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
const playerAnni = new Player(18,"Anni",2,1,2,3);
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
const playerNelli = new Player(25,"Nelli",0,3,0,2);
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
const playerMaare = new Player(35,"Maare",0,0,0,2);
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
const playerOona = new Player(48,"Oona",3,2,0,2);
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
const playerTilta = new Player(62,"Tilta",2,1,0,2);
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

// Viivi
const playerViivi = new Player(27,"Viivi",2,2,1,3);
let totalPointsV = playerViivi.totalPoints();
let totalPenaltiesV = playerViivi.totalMinutes();

const buildViivi = `
    <td>${playerViivi.number}</td> <!-- Pelinumero -->
    <td>${playerViivi.name}</td> <!-- Nimi -->
    <td>${playerViivi.goals}</td> <!-- Maalit -->
    <td>${playerViivi.passes}</td> <!-- Syötöt -->
    <td>${totalPointsV}</td> <!-- Pisteet -->
    <td>${totalPenaltiesV}</td> <!-- Jäähyt -->
    <td>${playerViivi.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("viivi").innerHTML = buildViivi;

// Sini
const playerSini = new Player(3,"Sini",0,1,1,2);
let totalPointsSi = playerSini.totalPoints();
let totalPenaltiesSi = playerSini.totalMinutes();

const buildSini = `
    <td>${playerSini.number}</td> <!-- Pelinumero -->
    <td>${playerSini.name}</td> <!-- Nimi -->
    <td>${playerSini.goals}</td> <!-- Maalit -->
    <td>${playerSini.passes}</td> <!-- Syötöt -->
    <td>${totalPointsSi}</td> <!-- Pisteet -->
    <td>${totalPenaltiesSi}</td> <!-- Jäähyt -->
    <td>${playerSini.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("sini").innerHTML = buildSini;

// Rea
const playerRea = new Player(23,"Rea",0,0,0,1);
let totalPointsR = playerRea.totalPoints();
let totalPenaltiesR = playerRea.totalMinutes();

const buildRea = `
    <td>${playerRea.number}</td> <!-- Pelinumero -->
    <td>${playerRea.name}</td> <!-- Nimi -->
    <td>${playerRea.goals}</td> <!-- Maalit -->
    <td>${playerRea.passes}</td> <!-- Syötöt -->
    <td>${totalPointsR}</td> <!-- Pisteet -->
    <td>${totalPenaltiesR}</td> <!-- Jäähyt -->
    <td>${playerRea.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("rea").innerHTML = buildRea;

// Sara
const playerSara = new Player(17,"Sara",1,1,0,1);
let totalPointsSa = playerSara.totalPoints();
let totalPenaltiesSa = playerSara.totalMinutes();

const buildSara = `
    <td>${playerSara.number}</td> <!-- Pelinumero -->
    <td>${playerSara.name}</td> <!-- Nimi -->
    <td>${playerSara.goals}</td> <!-- Maalit -->
    <td>${playerSara.passes}</td> <!-- Syötöt -->
    <td>${totalPointsSa}</td> <!-- Pisteet -->
    <td>${totalPenaltiesSa}</td> <!-- Jäähyt -->
    <td>${playerSara.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("sara").innerHTML = buildSara;

// Suvi Kylmälä
const playerSuviK = new Player(30,"Suvi K",0,0,0,1);
let totalPointsSu = playerSuviK.totalPoints();
let totalPenaltiesSu = playerSuviK.totalMinutes();

const buildSuviK = `
    <td>${playerSuviK.number}</td> <!-- Pelinumero -->
    <td>${playerSuviK.name}</td> <!-- Nimi -->
    <td>${playerSuviK.goals}</td> <!-- Maalit -->
    <td>${playerSuviK.passes}</td> <!-- Syötöt -->
    <td>${totalPointsSu}</td> <!-- Pisteet -->
    <td>${totalPenaltiesSu}</td> <!-- Jäähyt -->
    <td>${playerSuviK.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("suvik").innerHTML = buildSuviK;

// Lotta Nyman
const playerLottaN = new Player(91,"Lotta N",0,0,0,1);
let totalPointsLN = playerLottaN.totalPoints();
let totalPenaltiesLN = playerLottaN.totalMinutes();

const buildLottaN = `
    <td>${playerLottaN.number}</td> <!-- Pelinumero -->
    <td>${playerLottaN.name}</td> <!-- Nimi -->
    <td>${playerLottaN.goals}</td> <!-- Maalit -->
    <td>${playerLottaN.passes}</td> <!-- Syötöt -->
    <td>${totalPointsLN}</td> <!-- Pisteet -->
    <td>${totalPenaltiesLN}</td> <!-- Jäähyt -->
    <td>${playerLottaN.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("lottan").innerHTML = buildLottaN;

// Jenna
const playerJenna = new Player(9,"Jenna",0,0,1,1);
let totalPointsJ = playerJenna.totalPoints();
let totalPenaltiesJ = playerJenna.totalMinutes();

const buildJenna = `
    <td>${playerJenna.number}</td> <!-- Pelinumero -->
    <td>${playerJenna.name}</td> <!-- Nimi -->
    <td>${playerJenna.goals}</td> <!-- Maalit -->
    <td>${playerJenna.passes}</td> <!-- Syötöt -->
    <td>${totalPointsJ}</td> <!-- Pisteet -->
    <td>${totalPenaltiesJ}</td> <!-- Jäähyt -->
    <td>${playerJenna.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("jenna").innerHTML = buildJenna;