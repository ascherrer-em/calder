import type { Point2D } from '@/types/Point2D'
import { CalderShape } from './CalderShape'

export class CalderCircle extends CalderShape {
  radius: number = 0
  constructor(color: string, radius: number) {
    super(color)
    this.radius = radius
    this.b_width = radius
  }
  weight(): number {
    return Math.PI * this.radius ** 2
  }
  draw(node: any, center: Point2D): undefined {
    node
      .append('circle')
      .attr('cx', center.x)
      .attr('cy', center.y)
      .attr('r', this.radius)
      .style('fill', this.color)
      .style('stroke', null)
      .attr('class', 'calder_circle')
  }
}
