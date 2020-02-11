/* Bouge Fantome */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bougeFantome(numeroDefantome) {
    tabfantome[numeroDefantome].direction = getRandomIntInclusive(1, 4)
        //console.log('numeroDefantome = ' + numeroDefantome + ' direction = ' + tabfantome[numeroDefantome].direction + 'tabFantome.x =' + tabfantome[numeroDefantome].x + 'tabfantome[numeroDefantome].y =' + tabfantome[numeroDefantome].y)
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