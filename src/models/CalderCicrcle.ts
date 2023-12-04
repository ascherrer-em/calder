import type { Point2D } from '@/types/Point2D'
import { CalderShape } from './CalderShape'

export class CalderCircle extends CalderShape {
  radius: number = 0
  constructor(radius: number, color: string) {
    super(color)
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
      .style('fill', this.color)
      .style('stroke', null)
      .attr('class', 'calder_circle')
  }
}
