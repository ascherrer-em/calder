export class CalderHinge {
  // Center of mass
  x: number = 0
  y1: number = 0
  y2: number = 0

  constructor(x: number, y1: number, y2:number) {
    this.x = x
    this.y1 = y1
    this.y2 = y2
  }

  toSVG() {
    return ''
  }
}
