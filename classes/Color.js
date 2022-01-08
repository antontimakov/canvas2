class Color{
    /**
     * Конструктор
     */
    constructor() {
        this.settings = [
            [Math.random() * 255, Math.random() * 255, Math.random() * 255],
            [1,1,1]
        ];

        // Кол-во шагов до смены направления перетекания цвета или радиуса, чтобы не было дёрганья
        this.steps = this.stepsDefault = 50;
    }

    chColorRandom(){
        this.settings[0].forEach((item, i, arr)=>{
            if (item >= 255) {
                --arr[i];
            } else if (item <= 0) {
                ++arr[i];
            } else {
                if (this.steps-- <= 0) {
                    if (Math.random() < 0.5) {
                        this.settings[1][i] = 1;
                    } else {
                        this.settings[1][i] = -1;
                    }
                    this.steps = this.stepsDefault;
                }
                arr[i] += this.settings[1][i];
            }
        });
    }

    getColor(){
        return "rgba(" +
            this.settings[0][0] + "," +
            this.settings[0][1] + "," +
            this.settings[0][2] +
        ",0.5)"
    }

    getRandomValue(val){
        return Math.abs(this.settings[0][val]);
    }
}