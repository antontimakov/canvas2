class Class1{
    static init(){
        Class1.defaultColor = 'black';
        Main.context.fillStyle = Class1.defaultColor;

        Class1.stepsDefault = 50;
        // Кол-во шагов до смены направления перетекания цвета или радиуса, чтобы не было дёрганья
        Class1.steps = Class1.stepsDefault;

        Main.context.strokeRect(
            0,
            0,
            Main.width,
            Main.height
        );

        Class1.color1 = [
            // Текущий цвет
            [0, 256, 0],
            // Значение инкрементации
            [1, 1, 1]
        ];

        Class1.color2 = [
            [0, 0, 256],
            [1, 1, 1]
        ];

        Class1.color3 = [
            [256, 0, 0],
            [1, 1, 1]
        ];

        Class1.color4 = [
            [256, 256, 0],
            [1, 1, 1]
        ];

        Class1.radius = [
            [50,80,120,200],
            [1,1,1,1]
        ];

        // Текущий угол изображения
        Class1.deg = 0;
        // Для вращения по часовой
        Class1.first = 0;
        // Для вращения против часовой
        Class1.second = 0;

        Class1.animate();
    }

    static animate() {
        Main.context.clearRect(0, 0, Main.width, Main.height);

        Class1.chColorRandom(Class1.radius);

        Class1.draw4(Class1.drawFr);
        Class1.draw4(Class1.drawFr3);

        Class1.deg = Class1.first++;

        Class1.draw4(Class1.drawFr2);
        Class1.draw4(Class1.drawFr4);

        Class1.deg = Class1.second--;

        requestAnimationFrame(Class1.animate);

    }

    static draw4(fanc) {
        Main.drawRotated(90 + Class1.deg,  fanc);
        Main.drawRotated(180 + Class1.deg, fanc);
        Main.drawRotated(270 + Class1.deg, fanc);
        Main.drawRotated(360 + Class1.deg, fanc);
    }

    static drawFr() {
        let i = 50;
        let j = 50;
        Class1.chColorRandom(Class1.color1);
        Main.drawCircle(
            i,
            j,
            Class1.radius[0][0],
            "rgba(" +
            Class1.color1[0][0] + "," +
            Class1.color1[0][1] + "," +
            Class1.color1[0][2] +
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
        Class1.chColorRandom(Class1.color2);
        Main.drawCircle(
            i,
            j,
            Class1.radius[0][1],
            "rgba(" +
                Class1.color2[0][0] + "," +
                Class1.color2[0][1] + "," +
                Class1.color2[0][2] +
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
        Class1.chColorRandom(Class1.color3);
        Main.drawCircle(
            i,
            j,
            Class1.radius[0][2],
            "rgba(" +
            Class1.color3[0][0] + "," +
            Class1.color3[0][1] + "," +
            Class1.color3[0][2] +
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
        Class1.chColorRandom(Class1.color4);
        Main.drawCircle(
            i,
            j,
            Class1.radius[0][3],
            "rgba(" +
            Class1.color4[0][0] + "," +
            Class1.color4[0][1] + "," +
            Class1.color4[0][2] +
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
                if (Class1.steps-- <= 0) {
                    if (Math.random() < 0.5) {
                        color[1][segmment] = 1;
                    } else {
                        color[1][segmment] = -1;
                    }
                    Class1.steps = Class1.stepsDefault;
                }
                color[0][segmment] += color[1][segmment];
            }
        }
    }
}