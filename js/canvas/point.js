export default class Point {

    constructor(x, y, size = 18) {
        this.x = x;
        this.y = y;
        this.size = size
    }

    draw(ctx, color = "#FFFCF2") {
        const rad = this.size / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, 2 * Math.PI);
        ctx.fill();
    }

    update(canvas) {
        this.x+=1;
        this.y+=1;
    }
}