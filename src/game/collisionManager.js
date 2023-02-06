class Boundary {
    static width = 48;
    static height = 48;
    constructor({position}) {
        this.position = position,
        this.width = 48,
        this.height = 48
    }
    draw () {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

//collisions list
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));
}

const boundaries = [];
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025) 
            boundaries.push(new Boundary({position: {
            x: j * Boundary.width + OFFSET.x,
            y: i * Boundary.height + OFFSET.y
            }}))
    });
});

//Collision checker
function rectangularCollision({rectangle1, rectangle2}) {
    return (rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height)
}