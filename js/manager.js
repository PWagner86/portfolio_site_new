import Canvas from './canvas/canvas.js';

export default class Manager {

    constructor(canvas, canvasContainer) {
        this.canvas = canvas;
        this.canvasContainer = canvasContainer;
    }

    _init() {
        console.log('Page is running');
        const canvas = new Canvas(this.canvas, this.canvasContainer);
    }
}