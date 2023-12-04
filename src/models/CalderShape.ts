import { Point2D } from "../types/Point2D"
import { ShapeType } from "../types/ShapeType"

export class CalderShape {
  // Center of mass
  center: Point2D = {x: 0, y: 0}
  // Type of shape
  type: ShapeType = ShapeType.CIRCLE

  constructor(type: ShapeType) {
    this.type = type
  }

  toSVG() {
    if (this.type == ShapeType.CIRCLE) {
      return ''
    }
  }
}
