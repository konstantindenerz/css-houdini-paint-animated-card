registerPaint('labs-bg-dots', class {
    static get inputProperties() {
        return ['--dot-color', '--dot-radius'];
    }

    paint(ctx, {width, height}, properties) {
        const color = properties.get('--dot-color');
        const radius = properties.get('--dot-radius');
        const distance = 50;

        for (let x = 0; x < Math.round(width / distance); x++) {
            for (let y = 0; y < Math.round(height / distance); y++) {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(distance * x, distance * y, radius, 0, 2 * Math.PI, true);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

    }
});
