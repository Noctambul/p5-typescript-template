/** Compute a random number in the min and max range influenced by a bias. */
export function randomBias(
  min: number,
  max: number,
  bias: number,
  influence: number = 0.5
): number {
  // First compute the random value in the range.
  const random = Math.random() * (max - min) + min;
  // Then compute the mixer with the desired influence
  const mixer = Math.random() * influence;
  // Finally impact the random result by the influence
  return random * (1 - mixer) + bias * mixer;
}

export function randomSnap(min: number, max: number, snapInc: number): number {
  const random = Math.random() * (max - min) + min;
  return Math.round(random / snapInc) * snapInc;
}
