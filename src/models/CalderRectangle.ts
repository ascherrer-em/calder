import type { Point2D } from '@/types/Point2D'
import { CalderShape } from './CalderShape'

export class CalderCircle extends CalderShape {
  width: number = 0
  height: number = 0

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }
  weight(): number {
    return this.width * this.height
  }
  draw(node: any, center: Point2D, dy: number): undefined {
    node
      .append('rectangle')
      .attr('x', center.x - this.width / 2)
      .attr('y', center.y + dy - this.height / 2)
      .attr('width', this.width)
      .attr('height', this.height)
      .style('fill-color', this.color)
      .style('stroke', null)
      .class('calder_circle')
  }
}
