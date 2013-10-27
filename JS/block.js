'use strict'

var Block = function (ctx, blockSize, x, y, color)
{
    var x1 = x || 0;
    var y1 = y || 0;
    
<<<<<<< HEAD
    var id = "block" + x1 + "," + y1 + "," + color;
    var positionX = x1 / blockSize;
    var positionY = y1 / blockSize;
    var moveX = true;
=======
    var color1 = color || "FF0000";
    
    var id = "block" + x1 + "," + y1;
    var positionX = x1 / blockSize;
    var positionY = y1 / blockSize;
>>>>>>> cb9d40581fee80833576983a6fec5d2eae5423be
    
    var draw = function ()
    {
        ctx.fillStyle = color1;
        ctx.fillRect(x1, y1, blockSize, blockSize);
    }
    
    var update = function ()
    {
<<<<<<< HEAD
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
        
=======
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
>>>>>>> cb9d40581fee80833576983a6fec5d2eae5423be
        
        console.log(id + ":" + positionX + "," + positionY);
    }
    
    this.draw = draw;
    this.update = update;
}