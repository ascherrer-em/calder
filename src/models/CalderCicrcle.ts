import type { Point2D } from '@/types/Point2D'
import { CalderShape } from './CalderShape'

export class CalderCircle extends CalderShape {
  radius: number = 0
  constructor(radius: number) {
    super()
    this.radius = radius
  }
  weight(): number {
    return Math.PI * this.radius ** 2
  }
  draw(node: any, center: Point2D, dy: number): undefined {
    node
      .append('circle')
      .attr('cx', center.x)
      .attr('cy', center.y + dy)
      .attr('r', this.radius)
      .style('fill-color', this.color)
      .style('stroke', null)
      .class('calder_circle')
  }
}
