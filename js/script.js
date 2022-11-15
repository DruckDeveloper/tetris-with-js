/*
This nested array contains the different tetris shapes, where a number greater than zero represents a squeare of the shape, it will allow us to assign a color to the shape, and the 0 represents a empty space 
*/
const SHAPES = [
    [], 
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
    ], 
    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ], 
    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ], 
    [
        [4,4],
        [4,4],
    ], 
    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ], 
    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ], 
    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ]
]

/*
this class piece made the pieces of the tetris
*/
class Piece {
    constructor(shape, ctx) {
        this.shape = shape 
        this.ctx = ctx 
        this.y = 0 
        this.x = Math.floor(COLS / 2)
    }
    //this method build a piece on the board 
    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                //if a frame of the shape is greather than zero it will be fil with the color array 
                if (cell > 0) {
                    this.ctx.fillStyle = COLORS[cell] 
                    //draw the piece and place it 
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}