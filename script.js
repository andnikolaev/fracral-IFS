var sierpinski = function (Ax, Ay, Bx, By, Cx, Cy, d, ctx) {
    if (d > 0) {
        sierpinski(Ax, Ay, (Ax + Cx) / 2, (Ay + Cy) / 2, (Ax + Bx) / 2, (Ay + By) / 2, d - 1, ctx);
        sierpinski((Ax + Bx) / 2, (Ay + By) / 2, (Bx + Cx) / 2, (By + Cy) / 2, Bx, By, d - 1, ctx);
        sierpinski((Ax + Cx) / 2, (Ay + Cy) / 2, (Bx + Cx) / 2, (By + Cy) / 2, Cx, Cy, d - 1, ctx);
    }
    else {
        ctx.moveTo(Ax, Ay);
        ctx.lineTo(Bx, By);
        ctx.lineTo(Cx, Cy);
        ctx.lineTo(Ax, Ay);
    }
};

var drawTriangle = function () {
    var a = Number(document.getElementById("sideLength").value);

    //var h = (1.732050807 / 2) * a;
    var h = Math.sqrt(a*a-((a*a)/4));

    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    canvas.width = a+100;
    canvas.height = h+60;
    canvas.style.visibility = "visible";
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    var x = (a+100)/2;
    var y = h+30;
    var d = Number(document.getElementById("deep").value);
    sierpinski(x - a / 2, y, x + a / 2, y, x, y - h, d, ctx);
    ctx.fillStyle = '#00FF00';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
};

