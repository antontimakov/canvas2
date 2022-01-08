/**
 * Класс определяющий параметры поля
 */
class Main {
    static init() {
        Main.width = 1200;
        Main.height = 800;
        Main.canvas = document.getElementById("main");
        Main.context = Main.create();
        Main.defaultColor = 'black';
        //Class1.init();
        Class2.init();
    }

    /**
     * Создаёт context
     * @returns {OffscreenRenderingContext | CanvasRenderingContext2D | WebGLRenderingContext}
     */
    static create(){
        Main.canvas.width = Main.width;
        Main.canvas.height = Main.height;
        return Main.canvas.getContext("2d");
    }

    /**
     * Поворачивает рисуемое в func на degrees градусов
     * @param degrees
     * @param func
     */
    static drawRotated(degrees, func){
        const context = Main.context;
        const canvas = Main.canvas;
        context.save();
        context.translate(canvas.width/2,canvas.height/2);
        context.rotate(degrees*Math.PI/180);
        func();
        context.restore();
    }

    /**
     * Рисует круг
     * @param i Координата центрак круга по x
     * @param j Координата центрак круга по y
     * @param radius Радиус
     * @param color Цвет
     * @param fill Нужно ли закрасить
     */
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

    /**
     * Отладочная функция. Рисует рамки холста и центр
     */
    static test(){
        Main.context.strokeRect(
            0,
            0,
            Main.width,
            Main.height
        );
        Main.context.strokeRect(
            Main.width / 2 - 5,
            Main.height / 2 - 5,
            10,
            10
        );
    }
}