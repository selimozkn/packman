function reinitial() {
    vie--
    pacman = new pacpac()
    if (vie < 1) {
        grille = new grilleDef();
        score = 0
        vie = 3
        fant = 3
    }
}

function ajouter() {
    fant--
    tabfantome.push(new fantome())
}

function rejouer() {
    pacman = new pacpac()
    grille = new grilleDef();
    score = 0
    vie = 3

}

function accel() {
    dificult -= 50
    if (dificult < 200) {
        dificult = 200
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
    if (pacman.direction == 3 && pacman.y == 11 && pacman.x == 20) {
        pacman = new pacpac()
    }
    if (pacman.direction == 4 && pacman.y == 11 && pacman.x == 0) {
        pacman = new pacpac()
    }

    for (numeroDefantome = 0; numeroDefantome < 4; numeroDefantome++) {
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
    if (grille[pacman.y - 1][pacman.x - 1] == 4) {
        grille[pacman.y - 1][pacman.x - 1] = 2
        pacman.classe = 'pacman2'
    }
    var PacManman = document.createElement('div')
    PacManman.style.gridRow = pacman.y;
    PacManman.style.gridColumn = pacman.x;
    PacManman.classList.add(pacman.classe)
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


    for (let i = 0; i < fant; i++) {
        bougeFantome(i)
        colisionAvecFantome(i)
    }
    setTimeout(rafraichir, dificult)

}

window.addEventListener("load", function() {

    rafraichir();
    document.querySelector('#rejouer').addEventListener('click', function() {
        rejouer()
        dificult = 400
        fant = 3
    })
    document.querySelector('#ajouter').addEventListener('click', function() {
        ajouter()
    })
    document.querySelector('#accel').addEventListener('click', function() {
        accel()
    })

});