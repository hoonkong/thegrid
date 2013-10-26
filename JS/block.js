'use strict'

var Block = function (ctx, blockSize, x, y, color)
{
    var x1 = x || 0;
    var y1 = y || 0;
    
    var color1 = color || "FF0000";
    
    var id = "block" + x1 + "," + y1;
    var positionX = x1 / blockSize;
    var positionY = y1 / blockSize;
    
    var draw = function ()
    {
        ctx.fillStyle = color1;
        ctx.fillRect(x1, y1, blockSize, blockSize);
    }
    
    var update = function ()
    {
        var width = 800;
        var height = 500;
        
        var direction = parseInt(Math.random() * 10 / 2, 10);
        
        if (width / blockSize > positionX || positionX <= 0)
        {
            positionY = direction || positionY * -1;
        }
        else if (height / blockSize > positionY || positionY <= 0)
        {
            positionX = direction || positionX * -1;
        }
        
        x1 = blockSize * positionX++;
        y1 = blockSize * positionY++;
        
        console.log(id + ":" + positionX + "," + positionY);
    }
    
    this.draw = draw;
    this.update = update;
}