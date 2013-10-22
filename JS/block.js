'use strict'

var Block = function (ctx, blockSize, x, y, color)
{
    var x1 = x || 0;
    var y1 = y || 0;
    var color1 = color || "#FF0000";
    
    var id = "block" + x1 + "," + y1 + "," + color;
    var position = x1 / blockSize;
    
    var draw = function ()
    {
        ctx.fillStyle = color1;
        ctx.fillRect(x1, y1, blockSize, blockSize);
    }
    
    var update = function ()
    {
        x1 = blockSize * position++;
        console.log(id + ":" + position);
    }
    
    this.draw = draw;
    this.update = update;
}