class FigureCl2 {

    constructor(){
        this.step = 0;

        this.gcoo = {
            cp1x: Main.width / 2,
            cp1y: Main.height / 2,
            cp2x: Main.width / 2,
            cp2y: Main.height / 2,
            x: Main.width / 2,
            y: Main.height / 2
        };

        this.color = "rgba(" +
            Math.random() * 255 + "," +
            Math.random() * 255 + "," +
            Math.random() * 255 +
            ",0.5" +
        ")";
    }

    drawFigure(){
        const cnt = Main.context;
        const coo = this.gcoo;
        const rad = this.step;
        const delt = this.step * 2;

        Main.context.strokeStyle = this.color;

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

    getStep(){
        return this.step;
    }

    incrStep(){
        ++this.step;
    }
}