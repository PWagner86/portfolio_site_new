export default class Segment {
    
    constructor(p1, p2, width = 2) {
        this.p1 = p1;
        this.p2 = p2;
        this.width = width;
    }

    draw(ctx, color = '#EB5E28') {
        ctx.beginPath();
        ctx.lineWidth = this.width;
        ctx.strokeStyle = color;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }

    update(canvas) {
        this.p1.x++
    }
}