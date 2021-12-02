export const clamp = (a, min, max) => (a < min ? min : a > max ? max : a);

export const lerp = (a, b, amount, clamped = false) =>
  clamped ? clamp(a + (b - a) * amount, 0, 1) : a + (b - a) * amount;

export const map = (n, a, b, c, d, clamped = false) => {
  return clamped
    ? clamp(lerp(c, d, (n - a) / (b - a)), c, d)
    : lerp(c, d, (n - a) / (b - a));
};
