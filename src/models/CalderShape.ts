import { type Point2D } from '../types/Point2D'

export abstract class CalderShape {
  // Center of mass
  center: Point2D = { x: 0, y: 0 }
  color: string = '#FF0000'
  b_width: number = 0

  constructor(color: string) {
    this.color = color
  }

  abstract draw(node: any, center: Point2D): undefined

  abstract weight(): number
}
