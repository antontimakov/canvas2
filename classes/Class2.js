class Class2 {
    static init() {
        Class2.defaultColor = 'black';
        Main.context.fillStyle = Class2.defaultColor;

        Class2.step = 100;

        Class2.animate();
    }

    static animate() {
        Class2.drawFigure();
        ++Class2.step;

        //requestAnimationFrame(Class2.animate);
    }

    static drawFigure(){
        const cnt = Main.context;

        cnt.clearRect(0, 0, Main.width, Main.height);

        cnt.beginPath();
        ctx.moveTo(50,20);
        cnt.bezierCurveTo(
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 + Class2.step,
            Main.height / 2 + 50 + Class2.step);
        cnt.bezierCurveTo(
            Main.width / 2 - 50 - Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 - 50 - Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 - 50 - Class2.step,
            Main.height / 2);
        cnt.bezierCurveTo(
            Main.width / 2 - 50 - Class2.step,
            Main.height / 2 - 50 - Class2.step,
            Main.width / 2 - 50 - Class2.step,
            Main.height / 2 - 50 - Class2.step,
            Main.width / 2,
            Main.height / 2 - 50 - Class2.step);
        cnt.bezierCurveTo(
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 - 50 - Class2.step,
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 - 50 - Class2.step,
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2);
        cnt.bezierCurveTo(
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 + 50 + Class2.step,
            Main.height / 2 + 50 + Class2.step,
            Main.width / 2 + Class2.step,
            Main.height / 2 + 50 + Class2.step);
        cnt.stroke();
    }
}