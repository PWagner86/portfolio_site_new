import Point from './point.js';
import Segment from './segment.js';
import { randNum } from './math.js';

export default class Canvas {

    constructor(canvas, canvasContainer) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvasContainer = canvasContainer;
        this.width = this.canvasContainer.clientWidth;
        this.height = this.canvasContainer.clientHeight;

        this.pointCounter = 10;
        this.points = [];
        this.segments = [];

        this.#setCanvas();
        this.#setPoints();
        this.#setSegments();
        // this.animate();

    }

    #setCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height - (this.height / 3);
    }

    #setPoints() {
        const EDGE = 9;
        for(let i = 0; i < this.pointCounter; i++) {
            let x = randNum(this.canvas.width);
            let y = randNum(this.canvas.height);
            if(x > this.canvas.width - EDGE) x-=EDGE;
            if(x < 0 + EDGE) x+=EDGE;
            if(y > this.canvas.height - EDGE) y-=EDGE;
            if(y < 0 + EDGE) y+=EDGE;
            const point = new Point(x, y)
            this.points.push(point);
            point.draw(this.ctx);
        }
    }

    #setSegments() {
        for(let i = 0; i < this.points.length; i++) {
            let segment = null
            if(i + 1 < this.points.length) {
                segment = new Segment(this.points[i], this.points[i+1]);
            } else {
                segment = new Segment(this.points[i], this.points[0])
            }
            this.segments.push(segment);
            segment.draw(this.ctx);
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.heigth);
        this.points.forEach((point) => {
            point.update(this.canvas);
            point.draw(this.ctx);
        })
        this.segments.forEach((segment) => {
            segment.update(this.canvas);
            segment.draw(this.ctx)
        })

        requestAnimationFrame(() => {
            this.animate();
        })
            // console.log(t)
    }
}