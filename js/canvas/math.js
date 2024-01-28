export function lerp(A, B, t) {
    return A + (B - A) * t;
}

export function vLerp(A, B, t) {
    return {
        x: lerp(A.x, B.x, t),
        y: lerp(A.y, B.y, t)
    };
}

export function randNum(max) {
    return Math.floor(Math.random() * max);
}

export function randMinMaxInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}