export class CalderWire {
  // Center of mass
  left_x: number = 0
  left_y: number = 0
  right_x: number = 0
  right_y: number = 0

  constructor(left_x: number, left_y: number, right_x:number, right_y: number) {
    this.left_x = left_x
    this.left_y = left_y
    this.right_x = right_x
    this.right_y = right_y
  }

  toSVG() {
    return ''
  }
}
