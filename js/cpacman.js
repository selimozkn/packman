class pacpac {
    x;
    y;
    direction;
    classe;
    bougePacman() {


        affichage2.textContent = "Votre vie : " + vie

        if (this.direction == 1) {
            this.y--;
        }
        if (this.direction == 2) {
            this.y++;
        }
        if (this.direction == 3) {
            this.x++;
        }
        if (this.direction == 4) {
            this.x--;
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 3) {
            this.x--
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 4) {
            this.x++
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 1) {
            this.y++
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 2) {
            this.y--
        }
        if (this.direction == 3 && this.y == 11 && this.x == 20) {
            this.x = 1
            this.y = 11
            this.direction = 3
            this.classe = 'pacman'
        }
        if (this.direction == 4 && this.y == 11 && this.x == 0) {
            this.x = 19
            this.y = 11
            this.direction = 4
            this.classe = 'pacman'
        }

        for (let numeroDefantome = 0; numeroDefantome < tabfantome.length; numeroDefantome++) {
            if (this.x == tabfantome[numeroDefantome].x && this.y == tabfantome[numeroDefantome].y) {
                reinitial()
            }
        }
        affichage.textContent = "Votre score : " + score
        if (grille[this.y - 1][this.x - 1] == 1) {
            grille[this.y - 1][this.x - 1] = 2
            score++
            affichage.textContent = "Votre score : " + score
        }
        if (grille[this.y - 1][this.x - 1] == 4) {
            grille[this.y - 1][this.x - 1] = 2
            this.classe = 'pacman2'
        }
        var PacManman = document.createElement('div')
        PacManman.style.gridRow = this.y;
        PacManman.style.gridColumn = this.x;
        PacManman.classList.add(this.classe)
        Magrille.appendChild(PacManman)
    }
    constructor() {
        this.x = 5;
        this.y = 2;
        this.direction = 0;
        this.classe = 'pacman';
    }
}