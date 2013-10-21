'use strict'

var Block = function (ctx, blockSize, x, y)
{
    var x1 = x || 0;
    var y1 = y || 0;
    
    var id = "block" + x1 + "," + y1;
    var position = x1 / blockSize;
    
    var draw = function ()
    {
        ctx.fillStyle="#FF0000";
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