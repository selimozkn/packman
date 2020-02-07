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

function initGrille() {
    var Magrille = document.querySelector("#grille");
    let i = 1;
    let y = 1;
    Magrille.innerHTML = "";
    Magrille.style.gridTemplateRows = ('repeat(22, 40px)')
    Magrille.style.gridTemplateColumns = ('repeat(19, 40px)')

    for (let y = 0; y < grille.length; y++) {
        /* console.log(grille[y]) */
        for (let x = 0; x < grille[y].length; x++) {
            console.log(grille[y][x])
            var monElement = document.createElement('div')
                /* monElement.classList.add("mur") */
            Magrille.appendChild(monElement);
            if (grille[y][x] == 0) {
                monElement.classList.add("mur")
            } else if (grille[y][x] == 1) {
                monElement.classList.add("bonbon")
            } else if (grille[y][x] == 2) {
                monElement.classList.add("sol")
            }
        }
    }
}
initGrille()

/* function initGrille() {

    function viderGrille() {
        grille.innerHTML = " ";
    }
    
    while (i < espaceGrille.length) {
        while (y < espaceGrille[i].length + 1) {
            if (espaceGrille[i][y] == 0) {
                let sol = document.createElement('div');
                sol.classList.add("sol");
                grille.appendChild(sol);
            }
            if (espaceGrille[i][y] == 1) {
                let sol = document.createElement('div');
                sol.classList.add("mur");
                grille.appendChild(sol);
            }
            if (espaceGrille[i][y] == 2) {
                let sol = document.createElement('div');
                sol.classList.add("bonbon");
                grille.appendChild(sol);
            }
            console.log(y);
            y++;
        }
        console.log(i);
        i++;
    }
}
initGrille(); */