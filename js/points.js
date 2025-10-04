import Player from "./player.js"

// Suvi
const playerSuvi = new Player(29,"Suvi",1,0,0,1);
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
const playerElina = new Player(8,"Elina",2,1,0,1);
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
const playerSofia = new Player(12,"Sofia",1,3,0,1);
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
const playerAnniina = new Player(16,"Anniina",3,1,0,1);
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
const playerAnni = new Player(18,"Anni",0,4,0,1);
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
const playerNelli = new Player(25,"Nelli",0,1,0,1);
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
const playerMaare = new Player(35,"Maare (mv)",0,0,0,0);
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

// Tilta
const playerTilta = new Player(62,"Tilta",0,0,0,1);
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

// Meeri
const playerMeeri = new Player(23,"Meeri",2,2,0,1);
let totalPointsMee = playerMeeri.totalPoints();
let totalPenaltiesMee = playerMeeri.totalMinutes();

const buildMeeri = `
    <td>${playerMeeri.number}</td> <!-- Pelinumero -->
    <td>${playerMeeri.name}</td> <!-- Nimi -->
    <td>${playerMeeri.goals}</td> <!-- Maalit -->
    <td>${playerMeeri.passes}</td> <!-- Syötöt -->
    <td>${totalPointsMee}</td> <!-- Pisteet -->
    <td>${totalPenaltiesMee}</td> <!-- Jäähyt -->
    <td>${playerMeeri.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("meeri").innerHTML = buildMeeri;

/* // Sara
const playerSara = new Player(17,"Sara",0,0,0,0);
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

document.getElementById("sara").innerHTML = buildSara; */

/* // Lotta Nyman
const playerLottaN = new Player(9,"Lotta N (mv)",0,0,0,0);
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

document.getElementById("lottan").innerHTML = buildLottaN; */

// Meija
const playerMeija = new Player(7,"Meija",0,0,0,1);
let totalPointsMe = playerMeija.totalPoints();
let totalPenaltiesMe = playerMeija.totalMinutes();

const buildMeija = `
    <td>${playerMeija.number}</td> <!-- Pelinumero -->
    <td>${playerMeija.name}</td> <!-- Nimi -->
    <td>${playerMeija.goals}</td> <!-- Maalit -->
    <td>${playerMeija.passes}</td> <!-- Syötöt -->
    <td>${totalPointsMe}</td> <!-- Pisteet -->
    <td>${totalPenaltiesMe}</td> <!-- Jäähyt -->
    <td>${playerMeija.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("meija").innerHTML = buildMeija;

/* // Riikka
const playerRiikka = new Player(22,"Riikka",0,0,0,0);
let totalPointsRi = playerRiikka.totalPoints();
let totalPenaltiesRi = playerRiikka.totalMinutes();

const buildRiikka = `
    <td>${playerRiikka.number}</td> <!-- Pelinumero -->
    <td>${playerRiikka.name}</td> <!-- Nimi -->
    <td>${playerRiikka.goals}</td> <!-- Maalit -->
    <td>${playerRiikka.passes}</td> <!-- Syötöt -->
    <td>${totalPointsRi}</td> <!-- Pisteet -->
    <td>${totalPenaltiesRi}</td> <!-- Jäähyt -->
    <td>${playerRiikka.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("riikka").innerHTML = buildRiikka; */

/* // Saara
const playerSaara= new Player(50,"Saara",0,0,0,0);
let totalPointsSaa = playerSaara.totalPoints();
let totalPenaltiesSaa = playerSaara.totalMinutes();

const buildSaara = `
    <td>${playerSaara.number}</td> <!-- Pelinumero -->
    <td>${playerSaara.name}</td> <!-- Nimi -->
    <td>${playerSaara.goals}</td> <!-- Maalit -->
    <td>${playerSaara.passes}</td> <!-- Syötöt -->
    <td>${totalPointsSaa}</td> <!-- Pisteet -->
    <td>${totalPenaltiesSaa}</td> <!-- Jäähyt -->
    <td>${playerSaara.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("saara").innerHTML = buildSaara; */

// Sofia S
const playerSofiaS= new Player(48,"Sofia S",0,0,0,1);
let totalPointsSo = playerSofiaS.totalPoints();
let totalPenaltiesSo = playerSofiaS.totalMinutes();

const buildSofiaS = `
    <td>${playerSofiaS.number}</td> <!-- Pelinumero -->
    <td>${playerSofiaS.name}</td> <!-- Nimi -->
    <td>${playerSofiaS.goals}</td> <!-- Maalit -->
    <td>${playerSofiaS.passes}</td> <!-- Syötöt -->
    <td>${totalPointsSo}</td> <!-- Pisteet -->
    <td>${totalPenaltiesSo}</td> <!-- Jäähyt -->
    <td>${playerSofiaS.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("sofias").innerHTML = buildSofiaS;

// Marita
const playerMarita = new Player(20,"Marita",2,1,0,1);
let totalPointsMa = playerMarita.totalPoints();
let totalPenaltiesMa = playerMarita.totalMinutes();

const buildMarita = `
    <td>${playerMarita.number}</td> <!-- Pelinumero -->
    <td>${playerMarita.name}</td> <!-- Nimi -->
    <td>${playerMarita.goals}</td> <!-- Maalit -->
    <td>${playerMarita.passes}</td> <!-- Syötöt -->
    <td>${totalPointsMa}</td> <!-- Pisteet -->
    <td>${totalPenaltiesMa}</td> <!-- Jäähyt -->
    <td>${playerMarita.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("marita").innerHTML = buildMarita;

// Ronja
const playerRonja = new Player(22,"Ronja",0,0,0,1);
let totalPointsRo = playerRonja.totalPoints();
let totalPenaltiesRo = playerRonja.totalMinutes();

const buildRonja = `
    <td>${playerRonja.number}</td> <!-- Pelinumero -->
    <td>${playerRonja.name}</td> <!-- Nimi -->
    <td>${playerRonja.goals}</td> <!-- Maalit -->
    <td>${playerRonja.passes}</td> <!-- Syötöt -->
    <td>${totalPointsRo}</td> <!-- Pisteet -->
    <td>${totalPenaltiesRo}</td> <!-- Jäähyt -->
    <td>${playerRonja.games}</td> <!-- Pelatut pelit -->
`;

document.getElementById("ronja").innerHTML = buildRonja;

// Moona
const playerMoona = new Player(76,"Moona",1,0,0,1);
let totalPointsMo = playerMoona.totalPoints();
let totalPenaltiesMo = playerMoona.totalMinutes();

const buildMoona = `
    <td>${playerMoona.number}</td>
    <td>${playerMoona.name}</td>
    <td>${playerMoona.goals}</td>
    <td>${playerMoona.passes}</td>
    <td>${totalPointsMo}</td>
    <td>${totalPenaltiesMo}</td>
    <td>${playerMoona.games}</td>
`;

document.getElementById("moona").innerHTML = buildMoona;

//Amanda
const playerAmanda = new Player(40,"Amanda (MV)",0,0,0,1);
let totalPointsAm = playerAmanda.totalPoints();
let totalPenaltiesAm = playerAmanda.totalMinutes();

const buildAmanda = `
    <td>${playerAmanda.number}</td>
    <td>${playerAmanda.name}</td>
    <td>${playerAmanda.goals}</td>
    <td>${playerAmanda.passes}</td>
    <td>${totalPointsAm}</td>
    <td>${totalPenaltiesAm}</td>
    <td>${playerAmanda.games}</td>
`;

document.getElementById("amanda").innerHTML = buildAmanda;