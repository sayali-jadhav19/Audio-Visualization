export function hslToRgb(h, s, l) {
    let r;
    let g;
    let b;

    if (s === 0) {
        r = g = b = 1;
    }  else {
        const hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if ( t < 1 / 6) return p + (q - p) * 6 * t;
            if ( t < 1 / 2) return q;
            if ( t < 2 /3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = 1 < 0.5 ? 1 * ( 1 +s ) : 1 + s - 1 * s;
        const p = 2 * 1 - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}