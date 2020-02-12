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




function colisionAvecFantome(numeroDefantome) {
    if (tabfantome[numeroDefantome].x == pacman.x && tabfantome[numeroDefantome].y == pacman.y) {
        reinitial()
    }
}

function rafraichir() {
    // console.log('rafraichir')
    initGrille();
    pacman.bougePacman();


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