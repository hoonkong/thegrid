(function ()
{
    'use strict'
    
    var blockSize = 20;
    
    var c = document.getElementById("grid");
    var ctx = c.getContext("2d");
    
    var g = new Grid(ctx, c, blockSize);
    
    var b1 = new Block(ctx, blockSize);
    
    var b2 = new Block(ctx, blockSize, 3 * blockSize, 5 * blockSize, "#ff8000");
    
    var scene = new Scene(ctx, c);
    scene.pushElement(g);
    scene.pushElement(b1);
    scene.pushElement(b2);
    scene.drawScene();
    document.getElementById("startAnimate").addEventListener("click", scene.startAnimate);
    document.getElementById("endAnimate").addEventListener("click", scene.endAnimate);
})();