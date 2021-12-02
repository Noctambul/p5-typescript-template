/**
 * Based on : https://observablehq.com/@makio135/utilities
 */

import { clamp } from "./math-utils";

const TAU = Math.PI * 2;
const PI = Math.PI;

/**
 * https://observablehq.com/@mattdesl/heartbeat-function
 */
export const beat = (value, intensity = 2, freq = 1) =>
  (Math.atan(Math.sin(value * TAU * freq) * intensity) + PI / 2) / PI;

export const ease = (p, g) =>
  !g
    ? 3 * p * p - 2 * p * p * p
    : p < 0.5
    ? 0.5 * Math.pow(2 * p, g)
    : 1 - 0.5 * Math.pow(2 * (1 - p), g);

export const step = (x, edge) => {
  return x < edge ? 0 : 1;
};

export const smoothstep = (x, edge0, edge1) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

export const linearstep = (t, begin, end) =>
  clamp((t - begin) / (end - begin), 0, 1);

export const linearstepUpDown = (t, upBegin, upEnd, downBegin, downEnd) => {
  return linearstep(t, upBegin, upEnd) - linearstep(t, downBegin, downEnd);
};

export const stepUpDown = (t, begin, end) => step(t, begin) - step(t, end);
