// construction de la carte
var grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 0],
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

var Magrille = document.querySelector("#grille");

function initGrille() {

    let i = 1;
    let y = 1;
    Magrille.innerHTML = "";
    Magrille.style.gridTemplateRows = ('repeat(22, 40px)')
    Magrille.style.gridTemplateColumns = ('repeat(19, 40px)')

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


var pacman = {
    x: 5,
    y: 2,
    direction: 0
}


function bougePacman() {
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

    if (grille[pacman.y - 1][pacman.x - 1] == 1) {
        grille[pacman.y - 1][pacman.x - 1] = 2

    }

    var PacManman = document.createElement('div')
    PacManman.style.gridRow = pacman.y;
    PacManman.style.gridColumn = pacman.x;
    PacManman.classList.add('pacman')
    Magrille.appendChild(PacManman)


}



function rafraichir() {
    // console.log('rafraichir')
    initGrille();
    bougePacman();
    setTimeout(rafraichir, 200)

}
rafraichir()