// Normal random number generator
export function gaussianRandom(mean: number = 0, stdev: number = 1, min_value: number = 0): number {
  let r: number = 0
  while (true) {
    const u = 1 - Math.random() // Converting [0,1) to (0,1]
    const v = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    // Transform to the desired mean and standard deviation:
    r = z * stdev + mean
    if (r > min_value) {
      break
    }
  }
  return r
}

export function sample(arr: Array<any>) {
  /**
   * Sample a random value from a list
   */
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

export function deg2rad(angle: number): number {
  return angle * 0.017453292519943295 // (angle / 180) * Math.PI;
}
