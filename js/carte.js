// construction de la Map


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
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1],
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
class fantome {
    constructor() {
        this.x = 10;
        this.y = 11;
        this.direction = 0;
    }
}
var dificult = 400
var grille = new grilleDef();
var Magrille = document.querySelector("#grille");
window.innerWidth
window.innerHeight
console.log(window.innerHeight + '  ' + window.innerWidth)


var pacman = new pacpac()
var score = 0
var affichage = document.querySelector('h1')
var affichage2 = document.querySelector('h2')
var vie = 3
var fant = 4
var tabfantome = new Array();
for (let i = 0; i < fant; i++) {
    tabfantome.push(new fantome())
}

function initGrille() {

    let i = 1;
    let y = 1;
    Magrille.innerHTML = "";
    Magrille.style.display = "grid"
    Magrille.style.gridTemplateRows = 'repeat(22, 1fr)'
    Magrille.style.gridTemplateColumns = 'repeat(19, 1fr)'

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
            } else if (grille[y][x] == 4) {
                monElement.classList.add("super")
            }
            monElement.style.gridColumn = (+x) + 1
            monElement.style.gridRow = (+y) + 1
            Magrille.appendChild(monElement);
        }
    }
}