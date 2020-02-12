class fantome {
    /* Bouge Fantome */
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    colisionAvecFantome() {
        if (this.x == pacman.x && this.y == pacman.y) {
            reinitial()
        }
    }
    bougeFantome() {
        this.direction = this.getRandomIntInclusive(1, 10)

        //console.log('numeroDefantome = ' + numeroDefantome + ' direction = ' + this.direction + 'tabFantome.x =' + this.x + 'this.y =' + this.y)
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
        if (this == 3 && this.y == 11 && this.x == 20) {

            this.x = 1;
            this.y = 11;
            this.direction = 3;

        }
        if (this == 4 && this.y == 11 && this.x == 0) {

            this.x = 19;
            this.y = 11;
            this.direction = 4;

        }

        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 3) {
            this.direction = 4
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 4) {
            this.direction = 3
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 1) {
            this.direction = 2
        }
        if (grille[this.y - 1][this.x - 1] == 0 && this.direction == 2) {
            this.direction = 1
        }

        let Fan0 = document.createElement('div')
        Fan0.style.gridRow = this.y;
        Fan0.style.gridColumn = this.x;
        Fan0.classList.add(this.class)
        Magrille.appendChild(Fan0)
    }
    constructor(num) {
        this.x = 10;
        this.y = 11;
        this.direction = 0;
        this.class = "fantome" + num % 4
    }
}