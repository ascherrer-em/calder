import { type Point2D } from '../types/Point2D'

export abstract class CalderShape {
  // Center of mass
  center: Point2D = { x: 0, y: 0 }
  color: string = '#FF0000'

  constructor(color: string) {
    this.color = color
  }

  abstract draw(node: any, center: Point2D, dy: number): undefined

  abstract weight(): number
}
