class Class2 {
    static init() {
        Class2.defaultColor = 'black';
        Main.context.fillStyle = Class2.defaultColor;

        Class2.step = 0;

        Class2.animate();
    }

    static animate() {
        Class2.drawFigure();
        ++Class2.step;

        requestAnimationFrame(Class2.animate);
    }

    static drawFigure(){
        const cnt = Main.context;
        const coo = {
            cp1x: Main.width / 2,
            cp1y: Main.height / 2,
            cp2x: Main.width / 2,
            cp2y: Main.height / 2,
            x: Main.width / 2,
            y: Main.height / 2
        };
        const rad = Class2.step;
        const delt = Class2.step * 2;

        cnt.clearRect(0, 0, Main.width, Main.height);

        cnt.beginPath();
        // право низ
        cnt.moveTo(coo.x + rad,coo.y + rad);
        // лево низ
        cnt.bezierCurveTo(coo.cp1x,coo.cp1y + delt,coo.cp2x,coo.cp2y + delt,coo.x - rad,coo.y + rad);
        // лево верх
        cnt.bezierCurveTo(coo.cp1x - delt,coo.cp1y,coo.cp2x - delt,coo.cp2y,coo.x - rad,coo.y - rad);
        // право верх
        cnt.bezierCurveTo(coo.cp1x,coo.cp1y - delt,coo.cp2x,coo.cp2y - delt,coo.x + rad,coo.y - rad);
        // право низ
        cnt.bezierCurveTo(coo.cp1x + delt,coo.cp1y,coo.cp2x + delt,coo.cp2y,coo.x + rad,coo.y + rad);
        cnt.stroke();
    }
}