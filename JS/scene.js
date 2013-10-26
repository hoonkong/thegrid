'use strict'

var Scene = function (ctx, c)
{
    var elements;
    var animationHandle;
    
    var pushElement = function (element)
    {
        elements || (elements = []);
        elements.push(element);
    }
    
    var drawScene = function ()
    {
        ctx.clearRect(0, 0, c.width, c.height);
        
        for (var i = 0; i < elements.length; i++)
        {
            elements[i].draw();
            elements[i].update();
        }
    }
    
    var startAnimate = function ()
    {
<<<<<<< HEAD:JS/scene.js
        animationHandle = window.setInterval(drawScene, 500);
=======
        animationHandle = window.setInterval(drawScene, 400);
>>>>>>> eb9fed4a44ed729a5ddf0fadf0030faa83eb0e5b:JS/animate.js
    }
    
    var endAnimate = function ()
    {
        window.clearInterval(animationHandle);
    }
    
    this.pushElement = pushElement;
    this.drawScene = drawScene;
    this.startAnimate = startAnimate;
    this.endAnimate = endAnimate;
}