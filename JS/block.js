'use strict'

var Block = function (ctx, blockSize, x, y, color)
{
    var x1 = x || 0;
    var y1 = y || 0;
    var color1 = color || "#FF0000";
    
    var id = "block" + x1 + "," + y1 + "," + color;
    var positionX = x1 / blockSize;
    var positionY = y1 / blockSize;
    var moveX = true;
    
    var draw = function ()
    {
        ctx.fillStyle = color1;
        ctx.fillRect(x1, y1, blockSize, blockSize);
    }
    
    var update = function ()
    {
        var direction = Math.random() * 10 / 2;
        var dd = direction ? 1 : -1;
        
        if ((x1 + blockSize) >= 800 || x1 <= 0)
        {
            positionY = positionY * dd;
            moveX = false;
        }
        else if ((y1 + blockSize) >= 500 || y1 <= 0)
        {
            positionX = positionX * dd;
            moveX = true;
        }
       
        if (moveX)
        {
            x1 = blockSize * positionX++;
        }
        else
        {
            y1 = blockSize * positionY++;
        }
        
        
        console.log(id + ":" + positionX + "," + positionY);
    }
    
    this.draw = draw;
    this.update = update;
}