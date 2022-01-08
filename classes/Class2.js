class Class2 {
    static init() {
        Class2.defaultColor = 'black';
        Main.context.fillStyle = Class2.defaultColor;

        Class2.objs = [];
        Class2.step = 0;
        Class2.animate();
    }

    static animate() {
        Class2.objs.push(new FigureCl2());
        for(let r in Class2.objs){
            Class2.objs[r].drawFigure();
            Class2.objs[r].incrStep();
            if (Class2.objs[r].getStep() > 200){
                delete Class2.objs[r];
            }
        }
        requestAnimationFrame(Class2.animate);
    }
}