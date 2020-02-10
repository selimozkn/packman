// construction de la carte
class grilleDef {
    constructor() {
        let grilleDef = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 0],
            [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        return grilleDef;

    }
}
var grille = new grilleDef();
var Magrille = document.querySelector("#grille");

function initGrille() {

    let i = 1;
    let y = 1;
    Magrille.innerHTML = "";
    Magrille.style.display = "grid"
    Magrille.style.gridTemplateRows = 'repeat(22, 40px)'
    Magrille.style.gridTemplateColumns = 'repeat(22, 40px)'

    for (let y = 0; y < grille.length; y++) {
        /* console.log(grille[y]) */
        for (let x = 0; x < grille[y].length; x++) {

            var monElement = document.createElement('div')
                /* monElement.classList.add("mur") */

            if (grille[y][x] == 0) {
                monElement.classList.add("mur")
            } else if (grille[y][x] == 1) {
                monElement.classList.add("bonbon")
            } else if (grille[y][x] == 2) {
                monElement.classList.add("sol")
            }
            monElement.style.gridColumn = (+x) + 1
            monElement.style.gridRow = (+y) + 1
            Magrille.appendChild(monElement);
        }
    }
}

/* Bouge Fantome */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class fantome {
    constructor() {
        this.x = 10;
        this.y = 11;
        this.direction = 0;
    }
}
var tabfantome = new Array();
for (let i = 0; i < 3; i++) {
    tabfantome.push(new fantome())
}


function bougeFantome(numeroDefantome) {

    tabfantome[numeroDefantome].direction = getRandomIntInclusive(1, 4)
    console.log('numeroDefantome = ' + numeroDefantome + ' direction = ' + tabfantome[numeroDefantome].direction + 'tabFantome.x =' + tabfantome[numeroDefantome].x + 'tabfantome[numeroDefantome].y =' + tabfantome[numeroDefantome].y)
    if (tabfantome[numeroDefantome].direction == 1) {
        tabfantome[numeroDefantome].y--;

    }
    if (tabfantome[numeroDefantome].direction == 2) {
        tabfantome[numeroDefantome].y++;

    }
    if (tabfantome[numeroDefantome].direction == 3) {
        tabfantome[numeroDefantome].x++;

    }
    if (tabfantome[numeroDefantome].direction == 4) {
        tabfantome[numeroDefantome].x--;

    }

    if (grille[tabfantome[numeroDefantome].y - 1][tabfantome[numeroDefantome].x - 1] == 0 && tabfantome[numeroDefantome].direction == 3) {
        tabfantome[numeroDefantome].x--

    }
    if (grille[tabfantome[numeroDefantome].y - 1][tabfantome[numeroDefantome].x - 1] == 0 && tabfantome[numeroDefantome].direction == 4) {
        tabfantome[numeroDefantome].x++

    }
    if (grille[tabfantome[numeroDefantome].y - 1][tabfantome[numeroDefantome].x - 1] == 0 && tabfantome[numeroDefantome].direction == 1) {
        tabfantome[numeroDefantome].y++

    }
    if (grille[tabfantome[numeroDefantome].y - 1][tabfantome[numeroDefantome].x - 1] == 0 && tabfantome[numeroDefantome].direction == 2) {
        tabfantome[numeroDefantome].y--

    }


    let Fan0 = document.createElement('div')
    Fan0.style.gridRow = tabfantome[numeroDefantome].y;
    Fan0.style.gridColumn = tabfantome[numeroDefantome].x;
    Fan0.classList.add('fantome0')
    Magrille.appendChild(Fan0)

}


function reinitial() {
    vie--
    pacman = {
        x: 5,
        y: 2,
        direction: 0
    }

    if (vie < 1) {
        alert('Vous avez perdu recommencer')
        grille = new grilleDef();
        score = 0
        vie = 3

    }

}

/* Bouge pac man */
var pacman = {
    x: 5,
    y: 2,
    direction: 0
}
var score = 0
var affichage = document.querySelector('h1')
var affichage2 = document.querySelector('h2')
var vie = 3

function bougePacman() {
    affichage2.textContent = "Votre vie : " + vie
    document.querySelector('body').addEventListener('keydown', function() {

        var touche = window.event ? event.keyCode : event.which;
        if (touche == 38) {
            pacman.direction = 1;
        }
        if (touche == 40) {
            pacman.direction = 2;
        }
        if (touche == 39) {
            pacman.direction = 3;

        }
        if (touche == 37) {
            pacman.direction = 4;
        }
    });

    if (pacman.direction == 1) {
        pacman.y--;

    }
    if (pacman.direction == 2) {
        pacman.y++;

    }
    if (pacman.direction == 3) {
        pacman.x++;

    }
    if (pacman.direction == 4) {
        pacman.x--;

    }


    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 3) {
        pacman.x--

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 4) {
        pacman.x++

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 1) {
        pacman.y++

    }
    if (grille[pacman.y - 1][pacman.x - 1] == 0 && pacman.direction == 2) {
        pacman.y--

    }
    for (numeroDefantome = 0; numeroDefantome < 3; numeroDefantome++) {
        if (tabfantome[numeroDefantome].x == pacman.x && tabfantome[numeroDefantome].y == pacman.y) {

            reinitial()
        }
    }
    affichage.textContent = "Votre score : " +
        score

    if (grille[pacman.y - 1][pacman.x - 1] == 1) {
        grille[pacman.y - 1][pacman.x - 1] = 2
        score++
        affichage.textContent = "Votre score : " +
            score

    }

    var PacManman = document.createElement('div')
    PacManman.style.gridRow = pacman.y;
    PacManman.style.gridColumn = pacman.x;
    PacManman.classList.add('pacman')
    Magrille.appendChild(PacManman)


}

function colisionAvecFantome(numeroDefantome) {
    if (tabfantome[numeroDefantome].x == pacman.x && tabfantome[numeroDefantome].y == pacman.y) {
        reinitial()
    }
}

function rafraichir() {
    // console.log('rafraichir')
    initGrille();
    bougePacman();
    setTimeout(rafraichir, 300)

    for (let i = 0; i < 3; i++) {
        bougeFantome(i)
        colisionAvecFantome(i)
    }

}
rafraichir()