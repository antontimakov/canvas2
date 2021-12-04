// класс определяющий параметры поля
class Main {
    static init() {
        Main.width = 600;
        Main.height = 600;
        Main.canvas = document.getElementById("main");
        Main.context = Main.create();

        Main.defaultColor = 'black';
        Main.context.fillStyle = Main.defaultColor;

        Main.context.strokeRect(
            0,
            0,
            Main.width,
            Main.height
        );

        Main.color1 = [
            [0,    256,  0],
            [true, true, true]
        ];

        Main.color2 = [
            [0,    0,  256],
            [true, true, true]
        ];

        Main.color3 = [
            [256,    0,  0],
            [true, true, true]
        ];

        Main.deg = 0;
        Main.first = 0;
        Main.second = 0;
        Main.animate();
    }

    static animate() {
        Main.context.clearRect(0, 0, Main.width, Main.height);

        Main.draw4(Main.drawFr);
        Main.draw4(Main.drawFr3);

        Main.deg = Main.first++;

        Main.draw4(Main.drawFr2);

        Main.deg = Main.second--;

        requestAnimationFrame(Main.animate);

    }

    static draw4(fanc) {
        Main.drawRotated(90 + Main.deg,  fanc);
        Main.drawRotated(180 + Main.deg, fanc);
        Main.drawRotated(270 + Main.deg, fanc);
        Main.drawRotated(360 + Main.deg, fanc);
    }

    static create(){

        Main.canvas.width = Main.width;
        Main.canvas.height = Main.height;
        return Main.canvas.getContext("2d");
    }

    static drawFr() {
        let i = 20;
        let j = 20;
        Main.chColor(Main.color3);
        Main.drawCircle(
            i,
            j,
            25,
            "rgba(" +
            Main.color3[0][0] + "," +
            Main.color3[0][1] + "," +
            Main.color3[0][2] +
            ",0.5)",
            true
        );
        i = 40;
        j = 40;
        Main.drawCircle(i, j, 7);
    }

    static drawFr2() {
        let i = 60;
        let j = 60;
        Main.chColor(Main.color1);
        Main.drawCircle(
            i,
            j,
            80,
            "rgba(" +
                Main.color1[0][0] + "," +
                Main.color1[0][1] + "," +
                Main.color1[0][2] +
                ",0.5)",
            true
        );
        i = 80;
        j = 80;
        Main.drawCircle(i, j, 11);
    }
    static chColor(color){
        if (color[0][0] > 256){
            color[1][0] = false;
        }
        if (color[0][0] <= 0){
            color[1][0] = true;
        }
        if (color[1][0]){
            ++color[0][0];
        }
        else{
            --color[0][0];
        }
        if (color[0][1] > 256){
            color[1][1] = false;
        }
        if (color[0][1] <= 0){
            color[1][1] = true;
        }
        if (color[1][1]){
            ++color[0][1];
        }
        else{
            --color[0][1];
        }
        if (color[0][2] > 256){
            color[1][2] = false;
        }
        if (color[0][2] <= 0){
            color[1][2] = true;
        }
        if (color[1][2]){
            ++color[0][2];
        }
        else{
            --color[0][2];
        }
    }

    static drawFr3() {
        let i = 100;
        let j = 100;
        Main.chColor(Main.color2);
        Main.drawCircle(
            i,
            j,
            40,
            "rgba(" +
            Main.color2[0][0] + "," +
            Main.color2[0][1] + "," +
            Main.color2[0][2] +
            ",0.5)",
            true
        );
        i = 120;
        j = 120;
        Main.drawCircle(i, j, 5);
    }

    static drawCircle(i, j, radius, color = Main.defaultColor, fill = false) {
        Main.context.fillStyle = color;
        Main.context.beginPath();
        Main.context.arc(i, j, radius, 0, 2 * Math.PI);
        if (fill){
            Main.context.fill();
        }
        else{
            Main.context.stroke();
        }
        Main.context.fillStyle = Main.defaultColor;
    }

    static drawRotated(degrees, func){
        const context = Main.context;
        const canvas = Main.canvas;
        //context.clearRect(0,0,canvas.width,canvas.height);

        // save the unrotated context of the canvas so we can restore it later
        // the alternative is to untranslate & unrotate after drawing
        context.save();

        // move to the center of the canvas
        context.translate(canvas.width/2,canvas.height/2);

        // rotate the canvas to the specified degrees
        context.rotate(degrees*Math.PI/180);

        func();

        // we’re done with the rotating so restore the unrotated context
        context.restore();
    }
}