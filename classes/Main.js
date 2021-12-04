// класс определяющий параметры поля
class Main {
    static init() {
        Main.width = 1200;
        Main.height = 800;
        Main.canvas = document.getElementById("main");
        Main.context = Main.create();

        Main.defaultColor = 'black';
        Main.context.fillStyle = Main.defaultColor;

        Main.stepsDefault = 50;
        Main.steps = Main.stepsDefault;

        Main.context.strokeRect(
            0,
            0,
            Main.width,
            Main.height
        );

        Main.color1 = [
            [0, 256, 0],
            [1, 1, 1]
        ];

        Main.color2 = [
            [0, 0, 256],
            [1, 1, 1]
        ];

        Main.color3 = [
            [256, 0, 0],
            [1, 1, 1]
        ];

        Main.color4 = [
            [256, 256, 0],
            [1, 1, 1]
        ];

        Main.radius = [
            [50,80,120,200],
            [1,1,1,1]
        ];

        Main.deg = 0;
        Main.first = 0;
        Main.second = 0;
        Main.animate();
    }

    static animate() {
        Main.context.clearRect(0, 0, Main.width, Main.height);

        Main.chColorRandom(Main.radius);

        Main.draw4(Main.drawFr);
        Main.draw4(Main.drawFr3);

        Main.deg = Main.first++;

        Main.draw4(Main.drawFr2);
        Main.draw4(Main.drawFr4);

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
        let i = 50;
        let j = 50;
        Main.chColorRandom(Main.color1);
        Main.drawCircle(
            i,
            j,
            Main.radius[0][0],
            "rgba(" +
            Main.color1[0][0] + "," +
            Main.color1[0][1] + "," +
            Main.color1[0][2] +
            ",0.5)",
            true
        );
        i = 100;
        j = 100;
        Main.drawCircle(i, j, 7);
    }

    static drawFr2() {
        let i = 60;
        let j = 60;
        Main.chColorRandom(Main.color2);
        Main.drawCircle(
            i,
            j,
            Main.radius[0][1],
            "rgba(" +
                Main.color2[0][0] + "," +
                Main.color2[0][1] + "," +
                Main.color2[0][2] +
                ",0.5)",
            true
        );
        i = 80;
        j = 80;
        Main.drawCircle(i, j, 11);
    }

    static drawFr3() {
        let i = 100;
        let j = 100;
        Main.chColorRandom(Main.color3);
        Main.drawCircle(
            i,
            j,
            Main.radius[0][2],
            "rgba(" +
            Main.color3[0][0] + "," +
            Main.color3[0][1] + "," +
            Main.color3[0][2] +
            ",0.5)",
            true
        );
        i = 120;
        j = 120;
        Main.drawCircle(i, j, 5);
    }

    static drawFr4() {
        let i = 160;
        let j = 160;
        Main.chColorRandom(Main.color4);
        Main.drawCircle(
            i,
            j,
            Main.radius[0][3],
            "rgba(" +
            Main.color4[0][0] + "," +
            Main.color4[0][1] + "," +
            Main.color4[0][2] +
            ",0.5)",
            true
        );
        i = 200;
        j = 200;
        Main.drawCircle(i, j, 5);
    }

    static chColorRandom(color){
        for (let segmment in color[0]) {
            if (color[0][segmment] >= 255) {
                --color[0][segmment];
            } else if (color[0][segmment] <= 0) {
                ++color[0][segmment];
            } else {
                if (Main.steps-- <= 0) {
                    if (Math.random() < 0.5) {
                        color[1][segmment] = 1;
                    } else {
                        color[1][segmment] = -1;
                    }
                    Main.steps = Main.stepsDefault;
                }
                color[0][segmment] += color[1][segmment];
            }
        }
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