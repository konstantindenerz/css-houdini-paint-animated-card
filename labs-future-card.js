registerPaint('labs-future-card', class {

    static get inputProperties() {
        return ['--card-border-color', '--card-border-size', '--card-background-color', '--card-width'];
    }

    paint(ctx, size, properties) {
        const d = properties.get('--card-border-size').value;
        const color = properties.get('--card-border-color');
        const bgColor = properties.get('--card-background-color');
        const width = properties.get('--card-width').value || size.width;
        const height = size.height;

        ctx.translate((size.width - width) / 2, 0);
        ctx.beginPath();
        ctx.moveTo(width - d * 2, 0);
        ctx.lineTo(width - d, 0);
        ctx.lineTo(width, d);
        ctx.lineTo(width, d * 2);
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width - d * 2 - 5, 10);
        ctx.lineTo(width - d, 10);
        ctx.lineTo(width - 7, d + 5);
        ctx.lineTo(width - 7, d * 2 + 10);
        ctx.filter = 'blur(10px)';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.filter = 'blur(0)';

        ctx.beginPath();
        ctx.moveTo(width, d * 2);
        ctx.lineTo(width, height);
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(d + d , height);
        ctx.lineTo(d - d / 2, height);
        ctx.lineTo(0, height - d);
        ctx.lineTo(0, height - d * 2);
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(d + d , height - 10);
        ctx.lineTo(d - 5 , height - 10);
        ctx.lineTo(10, height - d);
        ctx.lineTo(10, height - d * 2);
        ctx.lineWidth = 3;
        ctx.filter = 'blur(10px)'
        ctx.stroke();
        ctx.filter = 'blur(0)';
        ctx.beginPath();
        ctx.moveTo(0, height - d * 2);
        ctx.lineTo(0, 0);
        ctx.lineWidth = 1;
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width - d, 0);
        ctx.lineTo(width, d);
        ctx.lineTo(width, height);
        ctx.lineTo(d / 2, height);
        ctx.lineTo(0, height - d );
        ctx.fillStyle = bgColor;
        ctx.fill();
    }
});
