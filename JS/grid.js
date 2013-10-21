'use strict'

var Grid = function (ctx, canvas, gridSize)
{
    var numWidth = canvas.width / gridSize;
    var numHeight = canvas.height / gridSize;
    
    var draw = function ()
    {
        for (var i = 1; i < numWidth; i++)
        {
            ctx.moveTo(i * gridSize, 0);
            ctx.lineTo(i * gridSize, canvas.height);
            ctx.strokeStyle = "#f0f0f0";
            ctx.stroke();
        }
        
        for (var i = 1; i < numHeight; i++)
        {
            ctx.moveTo(0, i * gridSize);
            ctx.lineTo(canvas.width, i * gridSize);
            ctx.strokeStyle = "#f0f0f0";
            ctx.stroke();
        }
    }
    
    var update = function ()
    {
    }
    
    this.draw = draw;
    this.update = update;
}