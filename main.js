import Manager from "./js/manager.js";

const canvasContainer = document.querySelector('[data-canvas_container]');
const canvas = document.querySelector('#my_canvas');

const manager = new Manager(canvas, canvasContainer);

manager._init();

