function reinitial() {
    vie--
    pacman = {
        x: 5,
        y: 2,
        direction: 0
    }
    if (vie < 1) {
        grille = new grilleDef();
        score = 0
        vie = 3
    }
}
/* Bouge pac man */


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
    affichage.textContent = "Votre score : " + score
    if (grille[pacman.y - 1][pacman.x - 1] == 1) {
        grille[pacman.y - 1][pacman.x - 1] = 2
        score++
        affichage.textContent = "Votre score : " + score
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

    for (let i = 0; i < 5; i++) {
        bougeFantome(i)
        colisionAvecFantome(i)
    }

}
window.addEventListener("load", function() {
    for (let i = 0; i < 3; i++) {
        tabfantome.push(new fantome())
    }
    rafraichir();
});