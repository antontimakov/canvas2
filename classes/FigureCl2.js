class FigureCl2 {

    constructor(){
        this.step = 0;

        let xMove = 0;
        let yMove = 0;
        if (Class2.type === 2){
            xMove = Class2.center.getRandomValue(0) - 122;
            yMove = Class2.center.getRandomValue(1) - 122;
        }
        this.gcoo = {
            cp1x: Main.width / 2 + xMove,
            cp1y: Main.height / 2 + yMove,
            cp2x: Main.width / 2 + xMove,
            cp2y: Main.height / 2 + yMove,
            x: Main.width / 2 + xMove,
            y: Main.height / 2 + yMove
        };

        if (Class2.type === 1) {
            this.color = "rgba(" +
                Math.random() * 255 + "," +
                Math.random() * 255 + "," +
                Math.random() * 255 +
                ",1" +
                ")";
        }
        else{
            this.color =  Class2.color.getColor();
        }
        if (Class2.type === 2){
            if (Class2.step % 30 === 0){
                this.color = Main.defaultColor;
            }
        }

        this.multi = Math.PI / 2;
    }

    drawFigure(){
        const cnt = Main.context;
        const coo = this.gcoo;
        const rad = this.step;
        const delt = this.step * this.multi;

        cnt.strokeStyle = this.color;
        cnt.lineWidth=2;
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
        if (Class2.type === 1){
            this.step += 2;
        }
        else{
            this.step += 3;
        }
    }
}