const canvas = document.getElementById('whiteboard');
const clear = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let isPainting = false;

const paint = (event) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#F88379';
    ctx.shadowColor = '#9a5852';


    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', event => {
    isPainting = true;
    ctx.beginPath();
});

canvas.addEventListener('mouseup', event => {
    isPainting = false;
});

canvas.addEventListener('mouseleave', event => {
    isPainting = false;
    if (event.buttons === 1) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke()
    }
});

canvas.addEventListener('mouseenter', event => {
    if (event.buttons === 1) {
        isPainting = true;
        ctx.beginPath();
    }
});

canvas.addEventListener('mousemove', paint);


clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});