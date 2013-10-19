'use strict'

var grid = function ()
{
    var blockSize = 20;
    
    var c = document.getElementById("grid");
    var ctx = c.getContext("2d");
   
    var numWidth = c.width / blockSize;
    var numHeight = c.height / blockSize;
    
    for (var i = 1; i < numWidth; i++)
    {
        ctx.moveTo(i * blockSize, 0);
        ctx.lineTo(i * blockSize, c.height);
        ctx.strokeStyle = "#f0f0f0";
        ctx.stroke();
    }
    
    for (var i = 1; i < numHeight; i++)
    {
        ctx.moveTo(0, i * blockSize);
        ctx.lineTo(c.width, i * blockSize);
        ctx.strokeStyle = "#f0f0f0";
        ctx.stroke();
    }
}

(function ()
{
    grid();
})();