import { ShapeType } from "../types/shapeType"

export class CalderShape {
  /**
   * Class for a shape (leaf) in the mobile
   */

  // Center of mass
  cx: number
  cy: number

  constructor(public type: ShapeType) {
    this.cx = 0
    this.cy = 0
  }

  toSVG() {
    if (this.type == ShapeType.CIRCLE) {
      return ''
    }
  }
}
