function reinitial() {
    vie--
    pacman = new pacpac()
    if (vie < 1) {
        rejouer()
        dificult = 300
        fant = 3
    }
}

function ajouter() {
    fant++
    tabfantome.push(new fantome(tabfantome.length))
}

function rejouer() {
    pacman = new pacpac()
    grille = new grilleDef();
    score = 0
    vie = 3

}

function accel() {
    dificult -= 25
    if (dificult < 100) {
        dificult = 100
    }
}
/* Bouge pac man */



function rafraichir() {
    // console.log('rafraichir')
    initGrille();
    pacman.bougePacman();
    for (let i = 0; i < fant; i++) {
        tabfantome[i].bougeFantome()
        tabfantome[i].colisionAvecFantome()
    }
    setTimeout(rafraichir, dificult)

}
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
window.addEventListener("load", function() {

    rafraichir();
    document.querySelector('#rejouer').addEventListener('click', function() {
        rejouer()
        dificult = 300
        fant = 3
    })
    document.querySelector('#accel').addEventListener('click', function() {
        accel();
        ajouter();
    })

});