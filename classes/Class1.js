class Class1{
    static init(){
        Main.defaultColor = 'black';
        Main.context.fillStyle = Main.defaultColor;

        Class1.color1 = new Color();
        Class1.color2 = new Color();
        Class1.color3 = new Color();
        Class1.color4 = new Color();
        Class1.radius = new Color();

        // Текущий угол изображения
        Class1.deg = 0;
        // Для вращения по часовой
        Class1.first = 0;
        // Для вращения против часовой
        Class1.second = 0;

        Class1.stop = false;

        Class1.animate();
    }

    static animate() {
        Main.context.clearRect(0, 0, Main.width, Main.height);

        Class1.radius.chColorRandom();

        Class1.draw4(Class1.drawFr);
        Class1.draw4(Class1.drawFr3);

        Class1.deg = Class1.first++;

        Class1.draw4(Class1.drawFr2);
        Class1.draw4(Class1.drawFr4);

        Class1.deg = Class1.second--;

        if (Class1.stop === false) {
            requestAnimationFrame(Class1.animate);
        }

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
        Class1.color1.chColorRandom();
        Main.drawCircle(
            i,
            j,
            Class1.radius.getRandomValue(0),
            Class1.color1.getColor(),
            true
        );
        i = 100;
        j = 100;
        Main.drawCircle(i, j, 7);
    }

    static drawFr2() {
        let i = 60;
        let j = 60;
        Class1.color2.chColorRandom();
        Main.drawCircle(
            i,
            j,
            Class1.radius.getRandomValue(1),
            Class1.color2.getColor(),
            true
        );
        i = 80;
        j = 80;
        Main.drawCircle(i, j, 11);
    }

    static drawFr3() {
        let i = 100;
        let j = 100;
        Class1.color3.chColorRandom();
        Main.drawCircle(
            i,
            j,
            Class1.radius.getRandomValue(2),
            Class1.color3.getColor(),
            true
        );
        i = 120;
        j = 120;
        Main.drawCircle(i, j, 5);
    }

    static drawFr4() {
        let i = 160;
        let j = 160;
        Class1.color4.chColorRandom();
        Main.drawCircle(
            i,
            j,
            Class1.radius.getRandomValue(0) + 20,
            Class1.color4.getColor(),
            true
        );
        i = 200;
        j = 200;
        Main.drawCircle(i, j, 5);
    }

    static stopAnimate(){
        Class1.stop = true;
    }
}