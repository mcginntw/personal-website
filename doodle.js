const canvas = document.getElementById('whiteboard');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let isPainting = false;
let startX;
let startY;

const paint = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#F88379';
    ctx.shadowColor = '#9a5852';


    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', e => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', paint);


clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});