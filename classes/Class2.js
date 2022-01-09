class Class2 {
    static init(type = 1) {
        Class2.type = type;
        Class2.defaultColor = 'black';
        Main.context.fillStyle = Class2.defaultColor;
        Main.context.clearRect(0, 0, Main.width, Main.height);

        Class2.objs = [];
        Class2.step = 0;
        Class2.center = new Color();
        Class2.color = new Color();

        Class2.stop = false;

        Class2.animate();
    }

    static animate() {
        ++Class2.step;
        Class2.center.chColorRandom();
        Class2.color.chColorRandom();
        Class2.objs.push(new FigureCl2());
        Class2.objs.forEach((item, i, arr)=>{
            item.drawFigure();
            item.incrStep();
            if (item.getStep() > 700){
                delete arr[i];
            }

        });
        if(Class2.stop === false) {
            requestAnimationFrame(Class2.animate);
        }
    }

    static stopAnimate(){
        Class2.stop = true;
    }
}