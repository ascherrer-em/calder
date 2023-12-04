import { Point2D } from "../types/Point2D"

export class CalderWire {

  left_end: Point2D = {x: 0, y:0}
  right_end: Point2D = {x: 0, y:0}
  hanging_point: Point2D = {x: 0, y:0}
  
  toSVG() {
    return ''
  }
}
