import { type Point2D } from '../types/Point2D'

export abstract class CalderShape {
  // Center of mass
  center: Point2D = { x: 0, y: 0 }
  color: string = '#FF0000'

  constructor() {}

  abstract draw(node: any): undefined

  abstract weight(): number
}
