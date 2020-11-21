import { log } from './logger'

log('Import works!')

let grid_size = 10
let board_size = 50;
let margin = 3

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

let dimension = margin + (margin + grid_size) * board_size

log('Canvas dimension is ' + dimension)

$(canvas).attr('width', dimension)
$(canvas).attr('height', dimension)

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, canvas.width, canvas.height);


let tiles = []

for(let y = 0; y < board_size; y++) {
  for(let x = 0; x < board_size; x++) {
    ctx.fillRect()
  }
}
